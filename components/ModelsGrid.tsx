import ModelCard from "@/components/ModelCard";
import type { Model } from "@/types";
import SortControls from "@/components/SortControls";
import LoadingUI from "@/components/LoadingUI";
import { TransitionStartFunction } from "react";
import NotFoundUI from "@/components/NotFoundUI";

export default function ModelsGrid({
  title,
  models,
  search,
  isPending,
  startTransition,
}: {
  title?: string;
  models: Model[];
  search?: string;
  isPending: boolean;
  startTransition: TransitionStartFunction;
}) {
  let pageTitle = "3D Models";
  if (title) {
    pageTitle = title;
  }
  if (search) {
    pageTitle = `Search results for "${search}"`;
  }
  if (title && search) pageTitle = `Search results for "${search}" in ${title}`;
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold">{pageTitle}</h1>
      <SortControls startTransition={startTransition} />
      {isPending ? (
        <LoadingUI>Loading models...</LoadingUI>
      ) : models.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {models.map((model: Model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      ) : (
        <NotFoundUI
          title="No Models Found"
          subtitle="Sorry, we couldn't find any models matching your criteria."
          link_text="Go Back Home"
          link_href="/3d-models"
        />
      )}
    </div>
  );
}
