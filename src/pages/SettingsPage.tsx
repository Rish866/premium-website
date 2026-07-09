import { useEffect, useState } from "react";
import { Crown, Mail, Shield, User } from "lucide-react";
import { supabase } from "../lib/supabase/client";

export default function SettingsPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setEmail(data.user?.email ?? "");
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="p-6 lg:p-10">
        <p className="text-white/50">Loading settings...</p>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-10">
      <div className="mb-10">
        <h1 className="text-4xl font-semibold">Settings</h1>
        <p className="mt-2 text-white/50">Manage your account and workspace preferences.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Profile Section */}
        <div className="lg:col-span-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-2xl">
            <div className="mb-6 flex items-center gap-3">
              <User size={20} className="text-cyan-200" />
              <h2 className="text-xl font-semibold">Profile</h2>
            </div>

            <div className="space-y-5">
              <label className="block">
                <span className="mb-2 block text-xs text-white/45">Email Address</span>
                <input
                  value={email}
                  disabled
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/60 outline-none"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs text-white/45">Display Name</span>
                <input
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs text-white/45">Company / Organization</span>
                <input
                  placeholder="Your company name"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
                />
              </label>

              <button
                onClick={() => { setSaved(true); setTimeout(() => setSaved(false), 2000); }}
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black"
              >
                {saved ? "Saved!" : "Save Changes"}
              </button>
            </div>
          </div>

          {/* Security */}
          <div className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-2xl">
            <div className="mb-6 flex items-center gap-3">
              <Shield size={20} className="text-cyan-200" />
              <h2 className="text-xl font-semibold">Security</h2>
            </div>

            <div className="space-y-5">
              <label className="block">
                <span className="mb-2 block text-xs text-white/45">New Password</span>
                <input
                  type="password"
                  placeholder="Enter new password"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs text-white/45">Confirm Password</span>
                <input
                  type="password"
                  placeholder="Confirm new password"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
                />
              </label>

              <button className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/70 hover:bg-white/10">
                Update Password
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar - Subscription */}
        <div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-2xl">
            <div className="mb-4 flex items-center gap-3">
              <Crown size={20} className="text-cyan-200" />
              <h2 className="text-xl font-semibold">Subscription</h2>
            </div>

            <div className="mb-4 rounded-xl border border-cyan-300/20 bg-cyan-400/10 p-4">
              <p className="font-medium text-cyan-200">Free Plan</p>
              <p className="mt-1 text-xs text-white/45">3 projects, basic features</p>
            </div>

            <div className="space-y-3 text-sm text-white/60">
              <div className="flex justify-between">
                <span>Projects</span>
                <span className="text-white">3 / 3</span>
              </div>
              <div className="flex justify-between">
                <span>Published</span>
                <span className="text-white">1 / 1</span>
              </div>
              <div className="flex justify-between">
                <span>Custom Domains</span>
                <span className="text-white/40">Pro Only</span>
              </div>
              <div className="flex justify-between">
                <span>AI Generations</span>
                <span className="text-white">5 / 5</span>
              </div>
            </div>

            <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-5 py-3 text-sm font-semibold text-black">
              Upgrade to Pro
            </button>
          </div>

          {/* Notifications */}
          <div className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-2xl">
            <div className="mb-4 flex items-center gap-3">
              <Mail size={20} className="text-cyan-200" />
              <h2 className="text-xl font-semibold">Notifications</h2>
            </div>

            <div className="space-y-4">
              {[
                { label: "Product updates", desc: "New features and improvements" },
                { label: "Usage alerts", desc: "When approaching plan limits" },
                { label: "Marketing", desc: "Tips and best practices" },
              ].map((item) => (
                <label key={item.label} className="flex items-start gap-3">
                  <input type="checkbox" defaultChecked className="mt-1 rounded border-white/20 bg-black/40" />
                  <div>
                    <p className="text-sm text-white/80">{item.label}</p>
                    <p className="text-xs text-white/40">{item.desc}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
