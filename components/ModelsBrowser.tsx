"use client";

import SearchForm from "@/components/SearchForm";
import ModelsGrid from "@/components/ModelsGrid";
import type { Model } from "@/types";
import { useTransition } from "react";
import PaginationControlls from "@/components/PaginationControls";

export default function ModelsBrowser({
  search,
  models,
  categoryName,
  totalPages,
  currentPage,
}: {
  search?: string;
  models: Model[];
  categoryName?: string;
  totalPages: number;
  currentPage: number;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <div>
      <SearchForm startTransition={startTransition} search={search} />
      <ModelsGrid
        isPending={isPending}
        search={search}
        models={models}
        title={categoryName}
        startTransition={startTransition}
      />
      <PaginationControlls totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
}
