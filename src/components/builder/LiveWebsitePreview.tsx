import { BlockRegistry } from "../../engine/registry/BlockRegistry";
import type { BuilderSection } from "../../types/builder";

type Props = {
  sections: BuilderSection[];
  widthClass?: string;
  zoom?: number;
  selectedSectionId?: string | null;
  onSelectSection?: (id: string) => void;
};

export default function LiveWebsitePreview({
  sections,
  widthClass = "max-w-5xl",
  zoom = 100,
  selectedSectionId,
  onSelectSection,
}: Props) {
  return (
    <div className="flex min-h-[calc(100vh-130px)] justify-center overflow-auto rounded-3xl border border-white/10 bg-black/30 p-8">
      <div style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top center" }} className="transition-transform duration-200">
        <div className={`mx-auto w-full ${widthClass} overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl shadow-cyan-500/10`}>
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.035] px-5 py-4">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
            <div className="ml-4 flex-1 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-white/35">
              agencyos.preview/live
            </div>
          </div>

          {sections.length === 0 ? (
            <div className="flex min-h-[520px] items-center justify-center p-10 text-center text-white/40">
              No sections found. Create sections to preview this page.
            </div>
          ) : (
            sections.map((section) => {
              const Block = BlockRegistry[section.type as keyof typeof BlockRegistry];
              const isSelected = selectedSectionId === section.id;

              if (!Block) {
                return (
                  <div key={section.id} className="border-b border-red-400/20 bg-red-400/10 p-8">
                    <h3 className="text-lg font-semibold text-red-300">Unknown Block</h3>
                    <p className="mt-2 text-sm text-red-200">{section.type} is not registered.</p>
                  </div>
                );
              }

              return (
                <div
                  key={section.id}
                  onClick={() => onSelectSection?.(section.id)}
                  className={`group relative cursor-pointer transition ${
                    isSelected ? "ring-2 ring-cyan-300 ring-inset" : "hover:ring-2 hover:ring-cyan-300/40 hover:ring-inset"
                  }`}
                >
                  <div className={`pointer-events-none absolute left-4 top-4 z-20 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-xl transition ${
                    isSelected
                      ? "border-cyan-300/50 bg-cyan-400/20 text-cyan-100 opacity-100"
                      : "border-white/10 bg-black/40 text-white/60 opacity-0 group-hover:opacity-100"
                  }`}>
                    {section.type.toUpperCase()}
                  </div>
                  <Block config={section.config} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
