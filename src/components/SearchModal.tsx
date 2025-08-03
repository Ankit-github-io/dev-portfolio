import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import VanishInput from "./ui/placeholderAndVanishInput";
import { useSearch } from "@/utils/useSearch";
import {
  SearchableDataType,
  SearchableItemType,
} from "@/@types/searchableDataType";
import FullScreenBlur from "./ui/ModalWithBlur";

const SearchModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [query, setQuery] = useState("");
  const [groupedResults, setGroupedResults] = useState<SearchableDataType>({});
  const [flatResults, setFlatResults] = useState<SearchableItemType[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { results, search } = useSearch();
  const router = useRouter();

  const itemRefs = useRef<HTMLLIElement[]>([]); // Store references for all list items

  useEffect(() => {
    if (query) {
      const grouped: SearchableDataType = results.reduce((acc, item) => {
        const category =
          item.type.charAt(0).toUpperCase() + item.type.slice(1) || "Others";
        if (!acc[category]) acc[category] = [];
        acc[category].push(item);
        return acc;
      }, {} as SearchableDataType);
      const flatList = Object.values(grouped).flat();

      setGroupedResults(grouped);
      if (flatList.length > 0) {
        setFlatResults(flatList);
        setSelectedIndex(0);
      } else {
        setSelectedIndex(null);
      }
    } else {
      setGroupedResults({});
      setFlatResults([]);
    }
  }, [query, results]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!flatResults.length) return;

    if (e.key === "ArrowDown") {
      // Move down (circular navigation)
      const newIndex =
        selectedIndex === null ? 0 : (selectedIndex + 1) % flatResults.length;
      setSelectedIndex(newIndex);

      // Scroll to the selected item
      scrollToSelected(newIndex);
    } else if (e.key === "ArrowUp") {
      // Move up (circular navigation)
      const newIndex =
        selectedIndex === null
          ? flatResults.length - 1
          : (selectedIndex - 1 + flatResults.length) % flatResults.length;
      setSelectedIndex(newIndex);

      // Scroll to the selected item
      scrollToSelected(newIndex);
    } else if (e.key === "Enter" && selectedIndex !== null) {
      handleSuggestionClick(flatResults[selectedIndex].link);
    }
  };

  const scrollToSelected = (index: number) => {
    const item = itemRefs.current[index];
    if (item) {
      item.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  const handleSuggestionClick = (link: string) => {
    router.push(link);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <FullScreenBlur
      isOpen
      onClose={onClose}
      className="mt-navHeight flex justify-center items-start"
    >
      <div
        onKeyDown={handleKeyDown}
        tabIndex={0}
        className="bg-surface-20 max-w-md w-[448px] rounded-xl ring-1 ring-borderColor"
      >
        <div className="p-2">
          <VanishInput
            onChange={(e) => {
              setQuery(e.target.value);
              search(e.target.value);
            }}
            placeholders={["Search..."]}
            onSubmit={(e) => {
              e.preventDefault();
              setQuery("");
            }}
            autoFocus
          />
        </div>
        <div className="rounded-xl m-2 max-h-[70svh] overflow-auto scrollbar-thin">
          {Object.keys(groupedResults).length > 0 ? (
            Object.keys(groupedResults).map((category, catIndex) => (
              <div key={category} className="px-2">
                <h3 className="text-pretty p-2 font-semibold">{category}</h3>
                <ul className="space-y-2 px-2" role="listbox">
                  {groupedResults[category].map((item, itemIndex) => {
                    const flatIndex =
                      Object.values(groupedResults).slice(0, catIndex).flat()
                        .length + itemIndex;

                    return (
                      <li
                        key={item.id}
                        ref={(el) => {
                          if (el) itemRefs.current[flatIndex] = el;
                        }}
                        onClick={() => handleSuggestionClick(item.link)}
                        onMouseEnter={() => setSelectedIndex(flatIndex)}
                        aria-selected={selectedIndex === flatIndex}
                        role="option"
                        className={`${
                          selectedIndex === flatIndex
                            ? "bg-primary text-primary-copy"
                            : "bg-surface-40 text-copy-light"
                        } rounded-md p-1 px-2 cursor-pointer`}
                      >
                        <a href={item.link} className="result-link">
                          <p className="text-base truncate">
                            {item.description}
                          </p>
                          <p className="text-sm">{item.title}</p>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))
          ) : (
            <p className="p-4 text-copy-lighter">
              No result found. Try different query.
            </p>
          )}
        </div>
        <div className="flex gap-3 font-semibold text-sm text-copy-lighter bg-surface-0 py-2 px-3 rounded-b-xl">
          <span>⏎ to select</span>
          <span>⇅ navigate</span>
          <span>esc close</span>
          <span className="grow text-end">
            Search by <strong>Fuse.Js</strong>
          </span>
        </div>
      </div>
    </FullScreenBlur>
  );
};

export default SearchModal;
