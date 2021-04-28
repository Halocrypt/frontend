import { Renderable, useEffect, useState } from "@hydrophobefireman/ui-lib";

interface PaginateProps<T> {
  atOnce: number;
  items: T[];
  render(item: T, i: number): Renderable;
  containerClass?: string | string[];
  nextButtonClass?: string | string[];
  previousButtonClass?: string | string[];
  buttonWrapperClass?: string;
  dualButtons?: boolean;
  nextText?: string;
  previousText?: string;
  buttonClass?: string;
}
export function Paginate<T>({
  atOnce,
  items,
  containerClass,
  render,
  nextButtonClass,
  previousButtonClass,
  buttonWrapperClass,
  dualButtons,
  nextText,
  previousText,
  buttonClass,
}: PaginateProps<T>) {
  const itemLength = items.length;
  const [index, setIndex] = useState(0);
  const endIndex = index + atOnce;
  const hasPrev = index !== 0;
  const hasMore = endIndex < itemLength;
  useEffect(() => setIndex(0), [items]);
  const list = useCurrentItems(items, render, index, endIndex);
  function next() {
    setIndex(index + atOnce);
  }
  function prev() {
    setIndex(Math.max(0, index - atOnce));
  }
  const buttons = list && (
    <div class={buttonWrapperClass}>
      <button
        class={previousButtonClass || buttonClass}
        onClick={prev}
        style={{ visibility: hasPrev ? "visible" : "hidden", transition: "0s" }}
      >
        {previousText || "Previous"}
      </button>

      <button
        class={nextButtonClass || buttonClass}
        onClick={next}
        style={{ visibility: hasMore ? "visible" : "hidden", transition: "0s" }}
      >
        {nextText || "Next"}
      </button>
    </div>
  );

  return (
    <div class={containerClass}>
      {dualButtons && buttons}
      <div>{list}</div>
      {buttons}
    </div>
  );
}

function useCurrentItems(
  all: any[],
  render: (a: any, i: number) => Renderable,
  currentIndex: number,
  endndex: number
) {
  function getItems() {
    const items = [];
    for (let i = currentIndex; i < Math.min(endndex, all.length); i++) {
      items.push(render(all[i], i));
    }
    return items;
  }
  function updateItems() {
    setItems(getItems);
  }
  const [items, setItems] = useState(null);
  useEffect(updateItems, [all, render, currentIndex, endndex]);
  return items;
}
