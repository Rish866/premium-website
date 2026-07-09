import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Loader2, Monitor, Smartphone, Tablet } from "lucide-react";
import { BlockRegistry } from "../../engine/registry/BlockRegistry";
import { getPages } from "../../services/projects/pageService";
import { getSections } from "../../services/builder/sectionService";
import type { BuilderSection } from "../../types/builder";

type DeviceMode = "desktop" | "tablet" | "mobile";

export default function PreviewPage() {
  const { id } = useParams();
  const [sections, setSections] = useState<BuilderSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [device, setDevice] = useState<DeviceMode>("desktop");

  useEffect(() => {
    if (!id) return;
    loadPreview();
  }, [id]);

  async function loadPreview() {
    try {
      setLoading(true);
      const pages = await getPages(id!);
      const homePage = pages.find((p: any) => p.is_home) || pages[0];
      if (homePage) {
        const data = await getSections(homePage.id);
        setSections(data as BuilderSection[]);
      }
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  }

  const widthClass =
    device === "desktop" ? "w-full max-w-5xl" :
    device === "tablet" ? "w-[768px]" :
    "w-[390px]";

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <Loader2 className="animate-spin text-cyan-200" size={28} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Toolbar */}
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-black/90 px-6 py-3 backdrop-blur-xl">
        <Link to="/projects" className="flex items-center gap-2 text-sm text-white/60 hover:text-white">
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-black/40 p-1">
          {[
            { id: "desktop" as DeviceMode, icon: Monitor, label: "Desktop" },
            { id: "tablet" as DeviceMode, icon: Tablet, label: "Tablet" },
            { id: "mobile" as DeviceMode, icon: Smartphone, label: "Mobile" },
          ].map((d) => (
            <button
              key={d.id}
              onClick={() => setDevice(d.id)}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs transition ${
                device === d.id ? "bg-white text-black" : "text-white/50 hover:text-white"
              }`}
            >
              <d.icon size={14} />
              {d.label}
            </button>
          ))}
        </div>

        <Link
          to={`/builder/${id}`}
          className="rounded-xl bg-white px-4 py-2 text-xs font-semibold text-black"
        >
          Edit in Builder
        </Link>
      </div>

      {/* Preview */}
      <div className="flex justify-center p-6">
        <div className={`${widthClass} overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl shadow-cyan-500/5 transition-all duration-300`}>
          {/* Browser chrome */}
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-5 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            <div className="ml-4 flex-1 rounded-full border border-white/10 bg-black/40 px-4 py-1.5 text-[10px] text-white/30">
              yourbusiness.agencyos.site
            </div>
          </div>

          {/* Sections */}
          {sections.length === 0 ? (
            <div className="flex min-h-[400px] items-center justify-center text-white/40">
              No content to preview.
            </div>
          ) : (
            sections.map((section) => {
              const Block = BlockRegistry[section.type as keyof typeof BlockRegistry];
              if (!Block) return null;
              return <Block key={section.id} config={section.config} />;
            })
          )}
        </div>
      </div>
    </div>
  );
}
