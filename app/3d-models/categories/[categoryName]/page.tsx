import type { CategoryPageProps } from "@/app/types";
import { getCategoryBySlug } from "@/app/lib/categories";

export default async function categoryPage({ params }: CategoryPageProps) {
  const { categoryName } = await params;
  const category = getCategoryBySlug(categoryName);
  return (
    <div>
      <h1>{category.displayName}</h1>
    </div>
  );
}
