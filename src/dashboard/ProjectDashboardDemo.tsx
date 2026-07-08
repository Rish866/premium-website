import { useState } from "react";
import { Plus, Search, Globe2, Pencil, Eye, MoreHorizontal } from "lucide-react";
import { templateOptions } from "../engine/templates/templateRegistry";

const initialProjects = [
  {
    id: "project-restaurant",
    name: "Urban Spice",
    industry: "Restaurant",
    status: "Published",
    domain: "urbanspice.agencyos.site",
    updated: "Today",
  },
  {
    id: "project-clinic",
    name: "Nova Care Clinic",
    industry: "Clinic",
    status: "Draft",
    domain: "Not connected",
    updated: "Yesterday",
  },
  {
    id: "project-transport",
    name: "RapidFleet Logistics",
    industry: "Transport",
    status: "Published",
    domain: "rapidfleet.agencyos.site",
    updated: "2 days ago",
  },
];

export default function ProjectDashboardDemo() {
  const [projects, setProjects] = useState(initialProjects);
  const [selectedTemplate, setSelectedTemplate] = useState("restaurant");

  const createProject = () => {
    const template = templateOptions.find((item) => item.key === selectedTemplate);
    const nextProject = {
      id: `project-${Date.now()}`,
      name: `${template?.label ?? "Business"} Website`,
      industry: template?.label ?? "Business",
      status: "Draft",
      domain: "Not connected",
      updated: "Just now",
    };

    setProjects([nextProject, ...projects]);
  };

  return (
    <section className="relative overflow-hidden bg-black px-6 py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.16),transparent_35%),radial-gradient(circle_at_80%_60%,rgba(168,85,247,.18),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 max-w-4xl">
          <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200 backdrop-blur-xl">
            SaaS Project Dashboard
          </div>

          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Manage multiple websites from one AgencyOS workspace.
          </h2>

          <p className="mt-5 max-w-2xl text-white/55">
            This is the future user dashboard where every business website becomes a project.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-2xl">
            <p className="mb-5 text-sm text-cyan-200">Create New Project</p>

            <label className="block">
              <span className="mb-2 block text-xs text-white/45">Choose Template</span>
              <select
                value={selectedTemplate}
                onChange={(e) => setSelectedTemplate(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
              >
                {templateOptions.map((template) => (
                  <option key={template.key} value={template.key} className="bg-black">
                    {template.label}
                  </option>
                ))}
              </select>
            </label>

            <button
              onClick={createProject}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
            >
              <Plus size={16} />
              Create Project
            </button>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/35 p-5">
              <p className="text-sm text-cyan-200">Next SaaS Logic</p>
              <div className="mt-4 space-y-3 text-sm text-white/55">
                <p>• Project saved to Supabase</p>
                <p>• User edits JSON</p>
                <p>• Live preview updates</p>
                <p>• Publish to subdomain</p>
                <p>• Connect custom domain</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-2xl">
            <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold">Projects</h3>
                <p className="text-sm text-white/45">{projects.length} websites in workspace</p>
              </div>

              <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-white/45">
                <Search size={16} />
                Search projects
              </div>
            </div>

            <div className="space-y-3">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="grid gap-4 rounded-3xl border border-white/10 bg-black/30 p-5 transition hover:border-cyan-300/30 hover:bg-white/[0.06] md:grid-cols-[1fr_140px_160px_150px]"
                >
                  <div>
                    <p className="text-lg font-semibold">{project.name}</p>
                    <p className="mt-1 text-sm text-white/45">{project.industry}</p>
                  </div>

                  <div>
                    <p
                      className={`inline-flex rounded-full px-3 py-1 text-xs ${
                        project.status === "Published"
                          ? "bg-emerald-400/10 text-emerald-300"
                          : "bg-yellow-400/10 text-yellow-300"
                      }`}
                    >
                      {project.status}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-white/50">
                    <Globe2 size={15} />
                    <span className="truncate">{project.domain}</span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm text-white/40">{project.updated}</p>

                    <div className="flex gap-2">
                      <button className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/60 hover:text-cyan-200">
                        <Eye size={15} />
                      </button>
                      <button className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/60 hover:text-cyan-200">
                        <Pencil size={15} />
                      </button>
                      <button className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/60 hover:text-cyan-200">
                        <MoreHorizontal size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
