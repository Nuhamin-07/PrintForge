import { getModels, getModelCount } from "@/lib/models";
import ModelsBrowser from "@/components/ModelsBrowser";
import { MODELS_PER_PAGE } from "@/lib/constants";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; sort?: string; page?: string }>;
}) {
  const query = (await searchParams).query?.toLowerCase() || "";
  const sort = (await searchParams).sort?.toLowerCase() || "";
  const page = Number((await searchParams).page) || 1;

  const models = await getModels({ query, sort, page, MODELS_PER_PAGE });

  const modelCount = await getModelCount({ query });
  const totalPages = Math.ceil(modelCount / MODELS_PER_PAGE);

  return (
    <ModelsBrowser
      search={query}
      models={models}
      totalPages={totalPages}
      currentPage={page}
    />
  );
}
