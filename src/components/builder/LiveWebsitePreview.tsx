import { BlockRegistry } from "../../engine/registry/BlockRegistry";

type Section = {
  id: string;
  type: string;
  config: any;
};

type Props = {
  sections: Section[];
  widthClass?: string;
};

export default function LiveWebsitePreview({
  sections,
  widthClass = "max-w-5xl",
}: Props) {
  return (
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
          const Block =
            BlockRegistry[section.type as keyof typeof BlockRegistry];

          if (!Block) {
            return (
              <div
                key={section.id}
                className="border-b border-red-400/20 bg-red-400/10 p-8"
              >
                <h3 className="text-lg font-semibold text-red-300">
                  Unknown Block
                </h3>

                <p className="mt-2 text-sm text-red-200">
                  "{section.type}" is not registered.
                </p>
              </div>
            );
          }

          return <Block key={section.id} config={section.config} />;
        })
      )}
    </div>
  );
}
