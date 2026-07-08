import { Link, Outlet, useNavigate } from "react-router-dom";
import { LayoutDashboard, LogOut, Plus, Settings, Sparkles } from "lucide-react";
import { supabase } from "../../lib/supabase/client";

export default function DashboardLayout() {
  const navigate = useNavigate();

  const logout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 border-r border-white/10 bg-white/[0.035] p-5 backdrop-blur-2xl lg:block">
          <Link to="/dashboard" className="mb-8 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-200">
              <Sparkles size={22} />
            </div>
            <div>
              <p className="font-semibold">AgencyOS</p>
              <p className="text-xs text-white/45">SaaS Workspace</p>
            </div>
          </Link>

          <nav className="space-y-2">
            <Link to="/dashboard" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/70 hover:bg-white/10">
              <LayoutDashboard size={16} />
              Dashboard
            </Link>

            <Link to="/projects" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/70 hover:bg-white/10">
              <Plus size={16} />
              Projects
            </Link>

            <Link to="/settings" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/70 hover:bg-white/10">
              <Settings size={16} />
              Settings
            </Link>
          </nav>

          <button onClick={logout} className="mt-8 flex w-full items-center gap-3 rounded-2xl border border-red-300/20 bg-red-400/10 px-4 py-3 text-sm text-red-200 hover:bg-red-400/15">
            <LogOut size={16} />
            Logout
          </button>
        </aside>

        <section className="flex-1">
          <Outlet />
        </section>
      </div>
    </main>
  );
}
