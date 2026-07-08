import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, Globe, MousePointer2, Rocket, ShieldCheck, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  ["AI Template Engine", "Generate industry-specific websites from structured JSON.", Cpu],
  ["Live Preview", "Every change updates the preview system instantly.", MousePointer2],
  ["SEO Foundation", "Metadata, speed, schema and conversion blocks ready.", Globe],
  ["Premium Motion", "Cinematic scroll, hover states and reveal animation.", Sparkles],
  ["SaaS Ready", "Built to connect with auth, projects and subscriptions.", Rocket],
  ["Reliable Structure", "Reusable modules instead of one-time landing sections.", ShieldCheck],
];

export default function ParallaxFeatureWall() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".parallax-heading", {
        y: 70,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
        },
      });

      gsap.from(".parallax-card", {
        y: 90,
        opacity: 0,
        scale: 0.94,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".parallax-grid",
          start: "top 75%",
        },
      });

      gsap.to(".parallax-orb-a", {
        y: -140,
        x: 80,
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".parallax-orb-b", {
        y: 140,
        x: -90,
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden px-6 py-28 text-white">
      <div className="parallax-orb-a absolute left-10 top-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="parallax-orb-b absolute bottom-10 right-10 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="parallax-heading mx-auto mb-16 max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200 backdrop-blur-xl">
            <Sparkles size={16} />
            Premium SaaS Architecture
          </div>

          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Not a page. A reusable website generation system.
          </h2>

          <p className="mt-6 text-lg text-white/55">
            Every section is moving towards one goal: user adds business data, AgencyOS generates a premium website.
          </p>
        </div>

        <div className="parallax-grid grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map(([title, text, Icon]: any) => (
            <div
              key={title}
              className="parallax-card group rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:border-cyan-300/30 hover:bg-white/[0.07]"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-cyan-200 transition duration-500 group-hover:scale-110">
                <Icon size={25} />
              </div>

              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-4 leading-7 text-white/55">{text}</p>

              <div className="mt-8 h-px bg-gradient-to-r from-cyan-300/40 via-white/10 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
