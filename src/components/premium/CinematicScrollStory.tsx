import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Layers3, Sparkles, Wand2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Choose Industry",
    text: "Restaurant, clinic, gym, hotel, transport, real estate or manufacturing.",
    icon: Layers3,
  },
  {
    title: "Edit Brand Data",
    text: "Logo, colors, services, pricing, gallery, testimonials and contact details.",
    icon: Wand2,
  },
  {
    title: "Generate Website",
    text: "AgencyOS converts JSON into a premium, responsive business website.",
    icon: Sparkles,
  },
];

export default function CinematicScrollStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".cinematic-card");

      gsap.from(".cinematic-title", {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.to(trackRef.current, {
        xPercent: -45,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1800",
          scrub: 1,
          pin: true,
        },
      });

      cards.forEach((card: any) => {
        gsap.from(card, {
          opacity: 0,
          y: 80,
          scale: 0.92,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "left 80%",
            containerAnimation: undefined,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-black px-6 py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,.18),transparent_34%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,.18),transparent_36%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="cinematic-title mb-16 max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200 backdrop-blur-xl">
            <Sparkles size={16} />
            Cinematic Builder Flow
          </div>

          <h2 className="text-5xl font-semibold tracking-tight md:text-7xl">
            From business data to premium website in minutes.
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-white/55">
            A sticky horizontal story section that makes AgencyOS feel like a serious SaaS platform, not a normal agency landing page.
          </p>
        </div>

        <div ref={trackRef} className="flex w-[180vw] gap-6">
          {cards.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="cinematic-card min-h-[440px] w-[520px] rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl"
              >
                <div className="mb-20 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-200">
                    <Icon size={26} />
                  </div>

                  <span className="text-6xl font-semibold text-white/10">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-4xl font-semibold">{item.title}</h3>
                <p className="mt-5 text-lg leading-8 text-white/55">{item.text}</p>

                <div className="mt-12 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-5 py-3 text-sm text-white/70">
                  Continue flow
                  <ArrowRight size={16} />
                </div>
              </div>
            );
          })}

          <div className="cinematic-card min-h-[440px] w-[620px] rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/20 via-purple-500/10 to-white/[0.05] p-8 shadow-2xl shadow-purple-500/10 backdrop-blur-2xl">
            <div className="mb-16 text-sm text-cyan-200">Final Output</div>
            <h3 className="text-5xl font-semibold">Published website with SEO, speed and conversion blocks.</h3>
            <p className="mt-6 max-w-lg text-lg leading-8 text-white/60">
              This is the base animation system for future premium scroll sections, parallax stories and builder demos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
