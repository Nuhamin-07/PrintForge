import ModelsGrid from "@/components/ModelsGrid";
import { getModels } from "@/lib/models";
import SearchForm from "@/components/SearchForm";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; sort?: string }>;
}) {
  const query = (await searchParams).query?.toLowerCase() || "";
  const sort = (await searchParams).sort?.toLowerCase() || "";
  const models = await getModels(query, sort);

  return (
    <>
      <SearchForm search={query} />
      <ModelsGrid title="3D Models" models={models} search={query} />
    </>
  );
}
