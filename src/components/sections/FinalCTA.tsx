import { ArrowRight, MessageCircle, Rocket } from "lucide-react";
import { siteData } from "../../data/siteData";

export default function FinalCTA() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-cyan-500/20 via-violet-600/20 to-black p-10 text-center shadow-2xl shadow-cyan-500/10 md:p-20">
        <div className="mx-auto mb-8 grid h-20 w-20 place-items-center rounded-[2rem] bg-white text-black">
          <Rocket className="h-9 w-9" />
        </div>

        <h2 className="mx-auto max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.07em] md:text-8xl">
          Start selling premium websites this week.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/65">
          AgencyOS gives you a reusable foundation to deliver modern local
          business websites faster, cleaner and at higher value.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => window.open(`https://wa.me/${siteData.whatsapp}`, "_blank")}
            className="rounded-full bg-white px-8 py-4 font-black text-black"
          >
            <MessageCircle className="mr-2 inline h-5 w-5" />
            Start on WhatsApp
          </button>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="rounded-full border border-white/15 bg-white/10 px-8 py-4 font-black text-white"
          >
            Back to top
            <ArrowRight className="ml-2 inline h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
