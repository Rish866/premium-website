import { X } from "lucide-react";

const blockTypes = [
  { type: "hero", title: "Hero", description: "Headline, subtitle and CTA area" },
  { type: "features", title: "Features", description: "Three-column feature highlights" },
  { type: "gallery", title: "Gallery", description: "Premium visual gallery grid" },
  { type: "pricing", title: "Pricing", description: "Plans and package cards" },
  { type: "faq", title: "FAQ", description: "Frequently asked questions" },
  { type: "contact", title: "Contact", description: "Phone and email contact block" },
];

type Props = {
  open: boolean;
  onClose: () => void;
  onAdd: (type: string) => void;
};

export default function AddBlockPanel({ open, onClose, onAdd }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
      <div className="h-full w-[420px] border-l border-white/10 bg-[#080808] p-6 text-white shadow-2xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Add Block</h2>
            <p className="mt-1 text-sm text-white/45">Insert a new section into this page.</p>
          </div>

          <button onClick={onClose} className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/60 hover:text-white">
            <X size={18} />
          </button>
        </div>

        <div className="space-y-3">
          {blockTypes.map((block) => (
            <button
              key={block.type}
              onClick={() => onAdd(block.type)}
              className="w-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-left transition hover:border-cyan-300/40 hover:bg-cyan-400/10"
            >
              <p className="text-lg font-semibold">{block.title}</p>
              <p className="mt-1 text-sm text-white/45">{block.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
