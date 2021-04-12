import { useEffect, useState } from "@hydrophobefireman/ui-lib";

function preventDefault(e: Event) {
  e.preventDefault();
}

export function useFileDrop(el?: HTMLElement): [File[] | null, () => void] {
  el = el || document.documentElement;
  const [files, setFiles] = useState(null);
  useEffect(() => {
    const onDrop = (e: DragEvent) => {
      e.stopPropagation();
      e.preventDefault();
      if (e.dataTransfer.items) {
        const tf = Array.from(e.dataTransfer.items);
        setFiles(
          tf
            .map((i) => (i.kind === "file" ? i.getAsFile() : null))
            .filter(Boolean)
        );
      } else {
        setFiles(Array.from(e.dataTransfer.files));
      }
    };
    el.addEventListener("drop", onDrop);
    el.addEventListener("dragover", preventDefault);
    return () => {
      el.removeEventListener("drop", onDrop);
      el.removeEventListener("dragover", preventDefault);
    };
  }, []);
  return [files && files.length ? files : null, () => setFiles(null)];
}
