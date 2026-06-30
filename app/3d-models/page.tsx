import ModelsGrid from "@/components/ModelsGrid";
import type { ModelsPageProps, Model } from "@/types";
import { getModels } from "@/lib/models";
import SearchForm from "@/components/SearchForm";

export default async function Page({ searchParams }: ModelsPageProps) {
  const query = (await searchParams).query?.toLowerCase() || "";
  const models = await getModels(query);

  return (
    <>
      <SearchForm search={query} />
      <ModelsGrid title="3D Models" models={models} search={query} />
    </>
  );
}
