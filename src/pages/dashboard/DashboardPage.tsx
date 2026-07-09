import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FolderKanban,
  Globe2,
  Layers,
  Plus,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import { fetchProjects } from "../../services/projects/projectService";
import type { Project } from "../../types/project";

export default function DashboardPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects()
      .then(setProjects)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const totalProjects = projects.length;
  const publishedCount = projects.filter((p) => p.published).length;
  const draftCount = totalProjects - publishedCount;
  const recentProjects = projects.slice(0, 4);

  return (
    <div className="p-6 lg:p-10">
      {/* Header */}
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200">
            <Sparkles size={16} />
            Dashboard
          </div>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Welcome to AgencyOS
          </h1>
          <p className="mt-3 text-white/50">
            Your AI-powered business operating system.
          </p>
        </div>

        <Link
          to="/onboarding"
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 px-5 py-3 text-sm font-semibold text-black"
        >
          <Zap size={16} />
          Generate New Website
        </Link>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Projects", value: totalProjects, icon: FolderKanban, color: "text-cyan-200" },
          { label: "Published", value: publishedCount, icon: Globe2, color: "text-emerald-300" },
          { label: "Drafts", value: draftCount, icon: Layers, color: "text-yellow-300" },
          { label: "AI Generations", value: totalProjects, icon: Sparkles, color: "text-purple-300" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-2xl"
          >
            <stat.icon className={`mb-4 ${stat.color}`} size={24} />
            <p className="text-3xl font-bold">{loading ? "-" : stat.value}</p>
            <p className="mt-1 text-sm text-white/45">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Quick Actions</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            to="/onboarding"
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-cyan-300/30 hover:bg-cyan-400/5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-200">
              <Zap size={22} />
            </div>
            <div>
              <p className="font-medium text-white">AI Generate Website</p>
              <p className="text-sm text-white/40">Create a new website in 5 minutes</p>
            </div>
          </Link>

          <Link
            to="/projects"
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-cyan-300/30 hover:bg-cyan-400/5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-400/15 text-purple-200">
              <FolderKanban size={22} />
            </div>
            <div>
              <p className="font-medium text-white">Manage Projects</p>
              <p className="text-sm text-white/40">View and edit your websites</p>
            </div>
          </Link>

          <Link
            to="/settings"
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-cyan-300/30 hover:bg-cyan-400/5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-200">
              <TrendingUp size={22} />
            </div>
            <div>
              <p className="font-medium text-white">Upgrade Plan</p>
              <p className="text-sm text-white/40">Unlock more features and projects</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Recent Projects */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Recent Projects</h2>
          <Link to="/projects" className="text-sm text-cyan-200 hover:underline">
            View All
          </Link>
        </div>

        {loading ? (
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 text-white/50">
            Loading projects...
          </div>
        ) : recentProjects.length === 0 ? (
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 text-center">
            <Sparkles className="mx-auto mb-4 text-cyan-200" size={32} />
            <p className="text-lg font-medium text-white">No projects yet</p>
            <p className="mt-2 text-sm text-white/45">
              Generate your first website with AI in under 5 minutes.
            </p>
            <Link
              to="/onboarding"
              className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black"
            >
              <Plus size={16} />
              Create First Website
            </Link>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {recentProjects.map((project) => (
              <Link
                key={project.id}
                to={`/builder/${project.id}`}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-cyan-300/20 hover:bg-white/[0.06]"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className={`rounded-full px-2 py-1 text-xs ${project.published ? "bg-emerald-400/15 text-emerald-300" : "bg-yellow-400/15 text-yellow-300"}`}>
                    {project.published ? "Published" : "Draft"}
                  </span>
                  <span className="text-xs text-white/30">{project.template}</span>
                </div>
                <p className="text-lg font-semibold text-white">{project.name}</p>
                <p className="mt-1 text-sm text-white/40">{project.industry}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
