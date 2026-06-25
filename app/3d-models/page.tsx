import ModelsGrid from "@/components/ModelsGrid";
import type { ModelsPageProps, Model } from "@/types";
import { getModels } from "@/lib/models";
import SearchForm from "@/components/SearchForm";

export default async function Page({ searchParams }: ModelsPageProps) {
  const { query } = await searchParams;
  const models = await getModels();

  const filteredModels = query
    ? models.filter(
        (model: Model) =>
          model.name.toLowerCase().includes(query.toLowerCase()) ||
          model.description.toLowerCase().includes(query.toLowerCase()),
      )
    : models;
  return (
    <>
      <SearchForm />
      <ModelsGrid title="3D Models" models={models} />;
    </>
  );
}
