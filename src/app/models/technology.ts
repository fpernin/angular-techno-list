type Category = "back" | "front" | "fullstack";

export interface Technology {
  id: number | null;
  technoName: string;
  category: Category;
  details: string;
}