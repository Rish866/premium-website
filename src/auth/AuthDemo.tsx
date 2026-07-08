import { useState } from "react";
import { supabase } from "../lib/supabase/client";
import { Lock, Mail, Sparkles } from "lucide-react";

export default function AuthDemo() {
  const [mode, setMode] = useState<"login" | "signup">("signup");
  const [email, setEmail] = useState("demo@agencyos.ai");
  const [password, setPassword] = useState("12345678");
  const [message, setMessage] = useState("");

  const handleAuth = async () => {
    setMessage("Processing...");

    const response =
      mode === "signup"
        ? await supabase.auth.signUp({ email, password })
        : await supabase.auth.signInWithPassword({ email, password });

    if (response.error) {
      setMessage(response.error.message);
      return;
    }

    setMessage(mode === "signup" ? "Signup successful. Check email if confirmation is enabled." : "Login successful.");
  };

  return (
    <section className="relative overflow-hidden bg-black px-6 py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.16),transparent_35%),radial-gradient(circle_at_80%_60%,rgba(168,85,247,.18),transparent_35%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_440px]">
        <div className="flex flex-col justify-center">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200 backdrop-blur-xl">
            <Sparkles size={16} />
            Supabase Auth Layer
          </div>

          <h2 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
            First real login system for AgencyOS SaaS.
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-white/55">
            This connects the frontend to Supabase Auth. Next we connect projects to the logged-in user.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl">
          <div className="mb-6 flex rounded-2xl border border-white/10 bg-black/35 p-1">
            <button
              onClick={() => setMode("signup")}
              className={`flex-1 rounded-xl px-4 py-3 text-sm ${
                mode === "signup" ? "bg-white text-black" : "text-white/55"
              }`}
            >
              Signup
            </button>
            <button
              onClick={() => setMode("login")}
              className={`flex-1 rounded-xl px-4 py-3 text-sm ${
                mode === "login" ? "bg-white text-black" : "text-white/55"
              }`}
            >
              Login
            </button>
          </div>

          <label className="mb-4 block">
            <span className="mb-2 block text-xs text-white/45">Email</span>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
              <Mail size={16} className="text-cyan-200" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent text-sm text-white outline-none"
              />
            </div>
          </label>

          <label className="mb-5 block">
            <span className="mb-2 block text-xs text-white/45">Password</span>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
              <Lock size={16} className="text-cyan-200" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent text-sm text-white outline-none"
              />
            </div>
          </label>

          <button
            onClick={handleAuth}
            className="w-full rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
          >
            {mode === "signup" ? "Create Account" : "Login"}
          </button>

          {message && (
            <div className="mt-5 rounded-2xl border border-white/10 bg-black/35 p-4 text-sm text-white/65">
              {message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
