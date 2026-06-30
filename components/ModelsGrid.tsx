import ModelCard from "@/components/ModelCard";
import type { Model } from "@/types";
import SortControls from "@/components/SortControls";
export default function ModelsGrid({
  title,
  models,
  search,
}: {
  title?: string;
  models: Model[];
  search?: string;
}) {
  let pageTitle = "3D Models";
  if (title) {
    pageTitle = title;
  }
  if (search) {
    pageTitle = `Search results for "${search}"`;
  }
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold">{pageTitle}</h1>
      <SortControls />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {models.map((model: Model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>
    </div>
  );
}
