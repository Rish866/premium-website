import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { supabase } from "../../lib/supabase/client";
import { BlockRegistry } from "../../engine/registry/BlockRegistry";
import type { BuilderSection } from "../../types/builder";

export default function PublicSitePage() {
  const { slug } = useParams();
  const [sections, setSections] = useState<BuilderSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [projectName, setProjectName] = useState("");

  useEffect(() => {
    if (!slug) return;
    loadSite();
  }, [slug]);

  async function loadSite() {
    try {
      setLoading(true);
      setError("");

      // 1. Find the project by slug (must be published)
      const { data: project, error: projErr } = await supabase
        .from("projects")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .maybeSingle();

      if (projErr) throw projErr;

      if (!project) {
        setError("Website not found or not published.");
        setLoading(false);
        return;
      }

      setProjectName(project.name);

      // 2. Get the home page
      const { data: pages, error: pageErr } = await supabase
        .from("pages")
        .select("*")
        .eq("project_id", project.id)
        .eq("is_home", true)
        .maybeSingle();

      if (pageErr) throw pageErr;

      if (!pages) {
        setError("No home page found.");
        setLoading(false);
        return;
      }

      // 3. Get all sections for the home page
      const { data: sectionData, error: secErr } = await supabase
        .from("sections")
        .select("*")
        .eq("page_id", pages.id)
        .order("sort_order");

      if (secErr) throw secErr;

      setSections((sectionData ?? []) as BuilderSection[]);
    } catch (err: any) {
      setError(err.message || "Failed to load website.");
    } finally {
      setLoading(false);
    }
  }

  // Loading state
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="flex flex-col items-center gap-3">
          <Loader2 size={28} className="animate-spin text-cyan-300" />
          <p className="text-sm text-white/40">Loading website...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black px-6">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-400/10">
            <span className="text-2xl">🚫</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Site Not Found</h1>
          <p className="mt-3 text-sm text-white/50">{error}</p>
          <p className="mt-6 text-xs text-white/30">
            If you are the owner, make sure the project is published.
          </p>
        </div>
      </div>
    );
  }

  // Render the website
  return (
    <div className="min-h-screen bg-black">
      {/* SEO meta - set page title */}
      {projectName && <title>{projectName}</title>}

      {sections.map((section) => {
        const Block = BlockRegistry[section.type as keyof typeof BlockRegistry];
        if (!Block) return null;
        return <Block key={section.id} config={section.config} />;
      })}

      {/* Powered by badge - bottom right */}
      <a
        href="/"
        target="_blank"
        rel="noopener"
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full border border-white/10 bg-black/80 px-3 py-1.5 text-[10px] text-white/40 backdrop-blur-xl transition hover:text-white/60"
      >
        Powered by <span className="font-semibold text-cyan-300">AgencyOS</span>
      </a>
    </div>
  );
}
