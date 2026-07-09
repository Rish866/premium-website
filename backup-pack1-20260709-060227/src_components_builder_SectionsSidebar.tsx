import { ArrowDown, ArrowUp, Plus } from "lucide-react";

type Section = {
  id: string;
  type: string;
};

type Props = {
  sections: Section[];
  selectedSectionId: string | null;
  onSelect: (id: string) => void;
  onAdd: () => void;
  onMoveUp: (id: string) => void;
  onMoveDown: (id: string) => void;
};

export default function SectionsSidebar({
  sections,
  selectedSectionId,
  onSelect,
  onAdd,
  onMoveUp,
  onMoveDown,
}: Props) {
  return (
    <aside className="w-64 border-r border-white/10 bg-white/[0.02] p-5">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Sections</h2>

        <button
          onClick={onAdd}
          className="rounded-xl bg-cyan-500 p-2 text-black hover:bg-cyan-400"
        >
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
            <button
              onClick={() => onSelect(section.id)}
              className="w-full px-4 py-3 text-left"
            >
              <div className="font-medium capitalize text-white">
                {section.type}
              </div>
            </button>

            <div className="flex border-t border-white/10">
              <button
                disabled={index === 0}
                onClick={() => onMoveUp(section.id)}
                className="flex flex-1 items-center justify-center p-2 text-white/45 hover:text-cyan-200 disabled:opacity-20"
              >
                <ArrowUp size={14} />
              </button>

              <button
                disabled={index === sections.length - 1}
                onClick={() => onMoveDown(section.id)}
                className="flex flex-1 items-center justify-center p-2 text-white/45 hover:text-cyan-200 disabled:opacity-20"
              >
                <ArrowDown size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
