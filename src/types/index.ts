export type Project = {
  title: string;
  des: string;
  tech: string[];
  status: "In Progress" | "Completed" | "On Hold";
  href?: string;
  customClass?: string;
};
