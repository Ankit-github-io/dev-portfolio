// hooks/useSearch.ts
import { useState } from "react";
import Fuse from "fuse.js";

// Import your searchable data
import { searchableData } from "@/data/searchableData";

// Configure Fuse options
const fuseOptions = {
  keys: [
    "title",
    "description",
    "technologies",
    "tags",
    "client",
    "project",
    "content",
    "type",
  ],
  threshold: 0.3, // Adjust fuzziness
};

const fuse = new Fuse(searchableData, fuseOptions);

export function useSearch() {
  const [results, setResults] = useState(searchableData);

  const search = (query: string) => {
    if (!query) {
      setResults(searchableData);
    } else {
      const fuseResults = fuse.search(query).map((result) => result.item);
      setResults(fuseResults);
    }
  };

  return { results, search };
}
