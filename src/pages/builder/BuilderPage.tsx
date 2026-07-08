import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import PagesSidebar from "../../components/builder/PagesSidebar";
import SectionsSidebar from "../../components/builder/SectionsSidebar";
import LiveWebsitePreview from "../../components/builder/LiveWebsitePreview";
import PropertyPanel from "../../components/builder/PropertyPanel";
import PreviewToolbar from "../../components/builder/PreviewToolbar";

import { createPage, getPages } from "../../services/projects/pageService";
import { ensureDefaultSections } from "../../services/builder/sectionService";

type PreviewMode = "desktop" | "tablet" | "mobile";

export default function BuilderPage() {
  const { id } = useParams();

  const [pages, setPages] = useState<any[]>([]);
  const [sections, setSections] = useState<any[]>([]);

  const [selectedPageId, setSelectedPageId] = useState<string | null>(null);
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(null);
  const [previewMode, setPreviewMode] = useState<PreviewMode>("desktop");

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

  const selectedSection = useMemo(
    () => sections.find((x) => x.id === selectedSectionId),
    [sections, selectedSectionId]
  );

  function updateLocalConfig(config: any) {
    setSections((prev) =>
      prev.map((section) =>
        section.id === selectedSectionId
          ? {
              ...section,
              config,
            }
          : section
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
      />

      <main className="flex-1 overflow-auto bg-[#080808] p-6">
        <PreviewToolbar mode={previewMode} onModeChange={setPreviewMode} />

        <LiveWebsitePreview
          sections={sections}
          widthClass={widthClass}
        />
      </main>

      <PropertyPanel
        section={selectedSection}
        onLocalChange={updateLocalConfig}
      />
    </div>
  );
}
