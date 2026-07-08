import { Plus } from "lucide-react";

type Page = {
  id: string;
  title: string;
  slug: string;
  is_home?: boolean;
};

type Props = {
  pages: Page[];
  selectedPageId: string | null;
  onSelect: (id: string) => void;
  onAdd: () => void;
};

export default function PagesSidebar({
  pages,
  selectedPageId,
  onSelect,
  onAdd,
}: Props) {
  return (
    <aside className="w-72 border-r border-white/10 bg-white/[0.03] p-5">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Pages</h2>

        <button
          onClick={onAdd}
          className="rounded-xl bg-cyan-500 p-2 text-black hover:bg-cyan-400"
        >
          <Plus size={16} />
        </button>
      </div>

      <div className="space-y-2">
        {pages.map((page) => (
          <button
            key={page.id}
            onClick={() => onSelect(page.id)}
            className={`w-full rounded-xl border px-4 py-3 text-left transition ${
              selectedPageId === page.id
                ? "border-cyan-400 bg-cyan-400/15"
                : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
            }`}
          >
            <div className="font-medium text-white">
              {page.is_home ? "🏠 " : ""}
              {page.title}
            </div>

            <div className="text-xs text-white/45">
              {page.slug}
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
}
