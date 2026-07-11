import { getModels } from "@/lib/models";
import ModelsBrowser from "@/components/ModelsBrowser";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; sort?: string }>;
}) {
  const query = (await searchParams).query?.toLowerCase() || "";
  const sort = (await searchParams).sort?.toLowerCase() || "";
  const models = await getModels({ query, sort });

  return <ModelsBrowser query={query} models={models} />;
}
