import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Eye, Globe2, Loader2, Pencil, Plus, Trash2, Zap } from "lucide-react";
import { toast } from "sonner";
import type { Project } from "../../types/project";
import {
  createProject,
  deleteProject,
  fetchProjects,
} from "../../services/projects/projectService";
import { publishProject, unpublishProject, getPublishedUrl } from "../../services/publish/publishService";

const templates = [
  { label: "Restaurant", value: "restaurant" },
  { label: "Clinic", value: "clinic" },
  { label: "Gym", value: "gym" },
  { label: "Transport", value: "transport" },
  { label: "Hotel", value: "hotel" },
  { label: "Real Estate", value: "real-estate" },
  { label: "Salon", value: "salon" },
  { label: "School", value: "school" },
  { label: "E-Commerce", value: "ecommerce" },
  { label: "Law Firm", value: "law-firm" },
  { label: "Photography", value: "photography" },
  { label: "Consulting", value: "consulting" },
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [name, setName] = useState("");
  const [template, setTemplate] = useState("restaurant");
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);

  const loadProjects = async () => {
    try {
      setLoading(true);
      const data = await fetchProjects();
      setProjects(data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async () => {
    if (!name.trim()) return;
    try {
      setCreating(true);
      const selected = templates.find((item) => item.value === template);
      const project = await createProject({
        name,
        template,
        industry: selected?.label ?? "Business",
      });
      setProjects([project, ...projects]);
      setName("");
      toast.success("Project created successfully!");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setCreating(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    try {
      await deleteProject(id);
      setProjects(projects.filter((p) => p.id !== id));
      toast.success("Project deleted");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handlePublishToggle = async (project: Project) => {
    try {
      if (project.published) {
        await unpublishProject(project.id);
        setProjects(projects.map((p) => (p.id === project.id ? { ...p, published: false } : p)));
        toast.success("Project unpublished");
      } else {
        await publishProject(project.id);
        setProjects(projects.map((p) => (p.id === project.id ? { ...p, published: true } : p)));
        toast.success("Project published! " + getPublishedUrl(project.slug));
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <div className="p-6 lg:p-10">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-semibold">Projects</h1>
          <p className="mt-2 text-white/50">
            Manage all your generated websites.
          </p>
        </div>
        <Link
          to="/onboarding"
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 px-5 py-3 text-sm font-semibold text-black"
        >
          <Zap size={16} />
          AI Generate
        </Link>
      </div>

      {/* Quick Create */}
      <div className="mb-8 rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-2xl">
        <p className="mb-3 text-sm text-white/45">Quick Create (Advanced)</p>
        <div className="grid gap-4 lg:grid-cols-[1fr_200px_140px]">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Project name"
            className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
          />
          <select
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
            className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
          >
            {templates.map((item) => (
              <option key={item.value} value={item.value} className="bg-black">
                {item.label}
              </option>
            ))}
          </select>
          <button
            onClick={handleCreate}
            disabled={creating || !name.trim()}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black disabled:opacity-50"
          >
            {creating ? <Loader2 size={16} className="animate-spin" /> : <Plus size={16} />}
            Create
          </button>
        </div>
      </div>

      {/* Projects List */}
      {loading ? (
        <div className="flex items-center justify-center p-12">
          <Loader2 className="animate-spin text-cyan-200" size={24} />
        </div>
      ) : projects.length === 0 ? (
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-12 text-center">
          <Zap className="mx-auto mb-4 text-cyan-200" size={32} />
          <p className="text-lg font-medium">No projects yet</p>
          <p className="mt-2 text-sm text-white/45">Use AI Generate to create your first website.</p>
          <Link
            to="/onboarding"
            className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black"
          >
            <Zap size={16} />
            Generate First Website
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="grid items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:grid-cols-[1fr_120px_120px_160px]"
            >
              <div>
                <p className="text-xl font-semibold">{project.name}</p>
                <p className="mt-1 text-sm text-white/45">
                  {project.industry} &middot; {project.template}
                </p>
              </div>

              <span className={`rounded-full px-3 py-1 text-center text-xs font-medium ${
                project.published
                  ? "bg-emerald-400/15 text-emerald-300"
                  : "bg-yellow-400/15 text-yellow-300"
              }`}>
                {project.published ? "Published" : "Draft"}
              </span>

              <button
                onClick={() => handlePublishToggle(project)}
                className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-2 text-xs transition ${
                  project.published
                    ? "border-red-300/20 bg-red-400/10 text-red-200 hover:bg-red-400/15"
                    : "border-emerald-300/20 bg-emerald-400/10 text-emerald-200 hover:bg-emerald-400/15"
                }`}
              >
                <Globe2 size={14} />
                {project.published ? "Unpublish" : "Publish"}
              </button>

              <div className="flex gap-2">
                <Link
                  to={`/builder/${project.id}`}
                  className="flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70 hover:text-cyan-200"
                >
                  <Pencil size={14} />
                  Edit
                </Link>
                <button className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/70 hover:text-cyan-200">
                  <Eye size={14} />
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="rounded-xl border border-red-300/20 bg-red-400/10 p-2 text-red-200 hover:bg-red-400/15"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
