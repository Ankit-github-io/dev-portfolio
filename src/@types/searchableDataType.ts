export type SearchableItemType = {
  id: number;
  title: string;
  link: string;
  description: string;
  technologies: string[];
  date: string;
  tags: string[];
  issuer?: string;
  code?: string;
  location?: string;
  role?: string;
  content?: string;
  type:
    | "project"
    | "blog"
    | "testimonial"
    | "certification"
    | "code-snippet"
    | "event"
    | "achievement";
};

export type SearchableDataType = {
  [key: string]: searchableitemType[];
};
