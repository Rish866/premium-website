import { Link } from "react-router-dom";
import { FolderKanban, Globe2, Plus, Sparkles } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="p-6 lg:p-10">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200">
            <Sparkles size={16} />
            Dashboard
          </div>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Welcome to AgencyOS</h1>
          <p className="mt-3 text-white/50">Create, manage and publish premium websites.</p>
        </div>

        <Link to="/projects" className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black">
          <Plus size={16} />
          New Project
        </Link>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {[
          ["Projects", "Manage all generated websites", FolderKanban],
          ["Publish", "Subdomains and custom domains", Globe2],
          ["Builder", "Edit content and JSON live", Sparkles],
        ].map(([title, text, Icon]: any) => (
          <div key={title} className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-2xl">
            <Icon className="mb-8 text-cyan-200" size={28} />
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-3 text-white/50">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
