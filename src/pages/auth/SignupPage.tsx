import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Lock, Mail, Sparkles } from "lucide-react";
import { supabase } from "../../lib/supabase/client";

export default function SignupPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("demo@agencyos.ai");
  const [password, setPassword] = useState("12345678");
  const [message, setMessage] = useState("");

  const signup = async () => {
    setMessage("Creating account...");
    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage("Account created. If email confirmation is disabled, you can login now.");
    setTimeout(() => navigate("/login"), 1000);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.18),transparent_35%),radial-gradient(circle_at_80%_60%,rgba(168,85,247,.18),transparent_35%)]" />

      <div className="relative w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-2xl">
        <div className="mb-6 flex items-center gap-3">
          <Sparkles className="text-cyan-200" />
          <div>
            <h1 className="text-2xl font-semibold">Create AgencyOS Account</h1>
            <p className="text-sm text-white/45">Start your SaaS workspace</p>
          </div>
        </div>

        <label className="mb-4 block">
          <span className="mb-2 block text-xs text-white/45">Email</span>
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
            <Mail size={16} className="text-cyan-200" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-transparent text-sm outline-none" />
          </div>
        </label>

        <label className="mb-5 block">
          <span className="mb-2 block text-xs text-white/45">Password</span>
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
            <Lock size={16} className="text-cyan-200" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-transparent text-sm outline-none" />
          </div>
        </label>

        <button onClick={signup} className="w-full rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black">
          Create Account
        </button>

        {message && <p className="mt-4 rounded-2xl border border-white/10 bg-black/35 p-4 text-sm text-white/60">{message}</p>}

        <p className="mt-5 text-center text-sm text-white/45">
          Already have account? <Link to="/login" className="text-cyan-200">Login</Link>
        </p>
      </div>
    </main>
  );
}
