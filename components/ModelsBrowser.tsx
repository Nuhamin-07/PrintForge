"use client";

import { Model } from "@/types";
import ModelsGrid from "./ModelsGrid";
import SearchForm from "./SearchForm";
import { useTransition } from "react";

export default function ModelsBrowser({
  query,
  models,
  categoryName,
}: {
  query?: string;
  models: Model[];
  categoryName?: string;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <div>
      <SearchForm startTransition={startTransition} search={query} />
      <ModelsGrid
        isPending={isPending}
        title={categoryName}
        models={models}
        search={query}
        startTransition={startTransition}
      />
    </div>
  );
}
