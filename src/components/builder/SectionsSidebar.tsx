type Section = {
  id: string;
  type: string;
};

type Props = {
  sections: Section[];
  selectedSectionId: string | null;
  onSelect: (id: string) => void;
};

export default function SectionsSidebar({
  sections,
  selectedSectionId,
  onSelect,
}: Props) {
  return (
    <aside className="w-64 border-r border-white/10 bg-white/[0.02] p-5">
      <h2 className="mb-6 text-lg font-semibold text-white">
        Sections
      </h2>

      <div className="space-y-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSelect(section.id)}
            className={`w-full rounded-xl border px-4 py-3 text-left transition ${
              selectedSectionId === section.id
                ? "border-cyan-400 bg-cyan-400/15"
                : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
            }`}
          >
            <div className="font-medium capitalize text-white">
              {section.type}
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
}
