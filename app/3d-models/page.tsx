import ModelsGrid from "@/app/components/ModelsGrid";
import type { ModelsPageProps, Model } from "@/app/types";
import { getModels } from "@/app/lib/models";

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
      <form className="w-full px-5 md:px-0 md:max-w-xl">
        <input
          type="text"
          placeholder="Eg. tool"
          name="query"
          aria-label="Search models"
          className="w-full py-3 pl-5 pr-5 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base"
        />
      </form>
      <ModelsGrid title="3D Models" models={filteredModels} />;
    </>
  );
}
