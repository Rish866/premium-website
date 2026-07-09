import { ArrowDown, ArrowUp, Copy, Plus, Trash2 } from "lucide-react";
import type { BuilderSection } from "../../types/builder";

type Props = {
  sections: BuilderSection[];
  selectedSectionId: string | null;
  onSelect: (id: string) => void;
  onAdd: () => void;
  onMoveUp: (id: string) => void;
  onMoveDown: (id: string) => void;
  onDelete: (id: string) => void;
  onDuplicate: (id: string) => void;
};

export default function SectionsSidebar({
  sections,
  selectedSectionId,
  onSelect,
  onAdd,
  onMoveUp,
  onMoveDown,
  onDelete,
  onDuplicate,
}: Props) {
  return (
    <aside className="w-72 border-r border-white/10 bg-white/[0.02] p-5">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">Sections</h2>
          <p className="text-xs text-white/40">Visual block stack</p>
        </div>
        <button onClick={onAdd} className="rounded-xl bg-cyan-500 p-2 text-black hover:bg-cyan-400">
          <Plus size={16} />
        </button>
      </div>

      <div className="space-y-2">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`rounded-xl border transition ${
              selectedSectionId === section.id
                ? "border-cyan-400 bg-cyan-400/15"
                : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
            }`}
          >
            <button onClick={() => onSelect(section.id)} className="w-full px-4 py-3 text-left">
              <div className="font-medium capitalize text-white">{section.type}</div>
              <div className="text-xs text-white/35">Order {index + 1}</div>
            </button>

            <div className="grid grid-cols-4 border-t border-white/10">
              <button disabled={index === 0} onClick={() => onMoveUp(section.id)} className="flex items-center justify-center p-2 text-white/45 hover:text-cyan-200 disabled:opacity-20">
                <ArrowUp size={14} />
              </button>
              <button disabled={index === sections.length - 1} onClick={() => onMoveDown(section.id)} className="flex items-center justify-center p-2 text-white/45 hover:text-cyan-200 disabled:opacity-20">
                <ArrowDown size={14} />
              </button>
              <button onClick={() => onDuplicate(section.id)} className="flex items-center justify-center p-2 text-white/45 hover:text-cyan-200">
                <Copy size={14} />
              </button>
              <button onClick={() => onDelete(section.id)} className="flex items-center justify-center p-2 text-red-300/60 hover:text-red-300">
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
