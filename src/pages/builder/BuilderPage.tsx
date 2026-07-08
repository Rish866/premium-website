import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import PagesSidebar from "../../components/builder/PagesSidebar";
import SectionsSidebar from "../../components/builder/SectionsSidebar";
import LiveWebsitePreview from "../../components/builder/LiveWebsitePreview";
import PropertyPanel from "../../components/builder/PropertyPanel";
import PreviewToolbar from "../../components/builder/PreviewToolbar";
import AddBlockPanel from "../../components/builder/AddBlockPanel";

import { createPage, getPages } from "../../services/projects/pageService";
import { createSection, ensureDefaultSections } from "../../services/builder/sectionService";
import { updateSectionOrder } from "../../services/builder/reorderSections";

type PreviewMode = "desktop" | "tablet" | "mobile";

export default function BuilderPage() {
  const { id } = useParams();

  const [pages, setPages] = useState<any[]>([]);
  const [sections, setSections] = useState<any[]>([]);

  const [selectedPageId, setSelectedPageId] = useState<string | null>(null);
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(null);
  const [previewMode, setPreviewMode] = useState<PreviewMode>("desktop");
  const [addBlockOpen, setAddBlockOpen] = useState(false);

  async function loadPages() {
    if (!id) return;

    const data = await getPages(id);
    setPages(data);

    if (data.length) {
      setSelectedPageId((prev) => prev ?? data[0].id);
    }
  }

  async function loadSections(pageId: string) {
    const data = await ensureDefaultSections(pageId);
    setSections(data);

    if (data.length) {
      setSelectedSectionId((prev) => prev ?? data[0].id);
    } else {
      setSelectedSectionId(null);
    }
  }

  useEffect(() => {
    loadPages();
  }, [id]);

  useEffect(() => {
    if (selectedPageId) {
      loadSections(selectedPageId);
    }
  }, [selectedPageId]);

  async function addPage() {
    if (!id) return;

    const title = prompt("Page Name");
    if (!title) return;

    await createPage(id, title);
    loadPages();
  }

  async function addBlock(type: string) {
    if (!selectedPageId) return;

    const nextSortOrder = sections.length + 1;
    const newSection = await createSection(selectedPageId, type, nextSortOrder);

    setSections([...sections, newSection]);
    setSelectedSectionId(newSection.id);
    setAddBlockOpen(false);
  }

  async function moveSection(sectionId: string, direction: "up" | "down") {
    const currentIndex = sections.findIndex((section) => section.id === sectionId);
    if (currentIndex === -1) return;

    const targetIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;
    if (targetIndex < 0 || targetIndex >= sections.length) return;

    const next = [...sections];
    const current = next[currentIndex];
    next[currentIndex] = next[targetIndex];
    next[targetIndex] = current;

    const normalized = next.map((section, index) => ({
      ...section,
      sort_order: index + 1,
    }));

    setSections(normalized);
    await updateSectionOrder(normalized);
  }

  const selectedSection = useMemo(
    () => sections.find((x) => x.id === selectedSectionId),
    [sections, selectedSectionId]
  );

  function updateLocalConfig(config: any) {
    setSections((prev) =>
      prev.map((section) =>
        section.id === selectedSectionId ? { ...section, config } : section
      )
    );
  }

  const widthClass =
    previewMode === "desktop"
      ? "max-w-6xl"
      : previewMode === "tablet"
      ? "max-w-3xl"
      : "max-w-sm";

  return (
    <div className="flex h-screen overflow-hidden bg-black text-white">
      <PagesSidebar
        pages={pages}
        selectedPageId={selectedPageId}
        onSelect={setSelectedPageId}
        onAdd={addPage}
      />

      <SectionsSidebar
        sections={sections}
        selectedSectionId={selectedSectionId}
        onSelect={setSelectedSectionId}
        onAdd={() => setAddBlockOpen(true)}
        onMoveUp={(id) => moveSection(id, "up")}
        onMoveDown={(id) => moveSection(id, "down")}
      />

      <main className="flex-1 overflow-auto bg-[#080808] p-6">
        <PreviewToolbar mode={previewMode} onModeChange={setPreviewMode} />

        <LiveWebsitePreview
          sections={sections}
          widthClass={widthClass}
          selectedSectionId={selectedSectionId}
          onSelectSection={setSelectedSectionId}
        />
      </main>

      <PropertyPanel section={selectedSection} onLocalChange={updateLocalConfig} />

      <AddBlockPanel
        open={addBlockOpen}
        onClose={() => setAddBlockOpen(false)}
        onAdd={addBlock}
      />
    </div>
  );
}
