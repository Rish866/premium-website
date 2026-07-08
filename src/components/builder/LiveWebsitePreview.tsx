import { BlockRegistry } from "../../engine/registry/BlockRegistry";

type Section = {
  id: string;
  type: string;
  config: any;
};

type Props = {
  sections: Section[];
};

export default function LiveWebsitePreview({ sections }: Props) {
  return (
    <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl">
      {sections.map((section) => {
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

        return (
          <Block
            key={section.id}
            config={section.config}
          />
        );
      })}
    </div>
  );
}
