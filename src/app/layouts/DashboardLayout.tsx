import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { FolderKanban, ImageIcon, LayoutDashboard, LogOut, Settings, Sparkles, Zap } from "lucide-react";
import { supabase } from "../../lib/supabase/client";

const navItems = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/onboarding", icon: Zap, label: "Generate" },
  { to: "/projects", icon: FolderKanban, label: "Projects" },
  { to: "/media", icon: ImageIcon, label: "Media" },
  { to: "/settings", icon: Settings, label: "Settings" },
];

export default function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();

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
              <p className="text-xs text-white/45">AI Business OS</p>
            </div>
          </Link>

          <nav className="space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm transition ${
                    isActive
                      ? "border-cyan-300/30 bg-cyan-400/10 text-cyan-200"
                      : "border-white/10 bg-white/[0.04] text-white/70 hover:bg-white/10"
                  }`}
                >
                  <item.icon size={16} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            onClick={logout}
            className="mt-8 flex w-full items-center gap-3 rounded-2xl border border-red-300/20 bg-red-400/10 px-4 py-3 text-sm text-red-200 hover:bg-red-400/15"
          >
            <LogOut size={16} />
            Logout
          </button>

          {/* Upgrade CTA */}
          <div className="mt-auto pt-8">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 p-4">
              <p className="text-sm font-medium text-white">Upgrade to Pro</p>
              <p className="mt-1 text-xs text-white/40">Unlock unlimited projects & custom domains</p>
              <button className="mt-3 w-full rounded-xl bg-white px-4 py-2 text-xs font-semibold text-black">
                Upgrade
              </button>
            </div>
          </div>
        </aside>

        <section className="flex-1 overflow-auto">
          <Outlet />
        </section>
      </div>
    </main>
  );
}
