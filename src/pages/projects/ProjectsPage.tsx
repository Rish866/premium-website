import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Eye, Loader2, Pencil, Plus, Trash2 } from "lucide-react";
import type { Project } from "../../types/project";
import {
  createProject,
  deleteProject,
  fetchProjects,
} from "../../services/projects/projectService";

const templates = [
  { label: "Restaurant", value: "restaurant" },
  { label: "Clinic", value: "clinic" },
  { label: "Gym", value: "gym" },
  { label: "Transport", value: "transport" },
  { label: "Hotel", value: "hotel" },
  { label: "Real Estate", value: "real-estate" },
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [name, setName] = useState("Urban Spice");
  const [template, setTemplate] = useState("restaurant");
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [message, setMessage] = useState("");

  const loadProjects = async () => {
    try {
      setLoading(true);
      setMessage("");
      const data = await fetchProjects();
      setProjects(data);
    } catch (error: any) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async () => {
    try {
      setCreating(true);
      setMessage("");

      const selected = templates.find((item) => item.value === template);

      const project = await createProject({
        name,
        template,
        industry: selected?.label ?? "Business",
      });

      setProjects([project, ...projects]);
      setName("");
    } catch (error: any) {
      setMessage(error.message);
    } finally {
      setCreating(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setMessage("");
      await deleteProject(id);
      setProjects(projects.filter((project) => project.id !== id));
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <div className="p-6 lg:p-10">
      <div className="mb-8">
        <h1 className="text-4xl font-semibold">Projects</h1>
        <p className="mt-2 text-white/50">
          Real Supabase projects connected to logged-in user.
        </p>
      </div>

      <div className="mb-8 grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-2xl lg:grid-cols-[1fr_220px_160px]">
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

      {message && (
        <div className="mb-6 rounded-2xl border border-red-300/20 bg-red-400/10 p-4 text-sm text-red-200">
          {message}
        </div>
      )}

      {loading ? (
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 text-white/50">
          Loading projects...
        </div>
      ) : projects.length === 0 ? (
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 text-white/50">
          No projects yet. Create your first website above.
        </div>
      ) : (
        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.045] p-5 md:grid-cols-[1fr_160px_160px_130px]"
            >
              <div>
                <p className="text-xl font-semibold">{project.name}</p>
                <p className="mt-1 text-sm text-white/45">
                  {project.industry} / {project.slug}
                </p>
              </div>

              <p className={project.published ? "text-sm text-emerald-300" : "text-sm text-yellow-300"}>
                {project.published ? "Published" : "Draft"}
              </p>

              <p className="text-sm text-white/45">{project.template}</p>

              <div className="flex gap-2">
                <Link
                  to={`/builder/${project.id}`}
                  className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/70 hover:text-cyan-200"
                >
                  <Pencil size={16} />
                </Link>

                <button className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/70 hover:text-cyan-200">
                  <Eye size={16} />
                </button>

                <button
                  onClick={() => handleDelete(project.id)}
                  className="rounded-xl border border-red-300/20 bg-red-400/10 p-2 text-red-200 hover:bg-red-400/15"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
