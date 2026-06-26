import Form from "next/form";

export default function SearchForm() {
  return (
    <Form action="/3d-models" className="w-full px-5 md:px-0 md:max-w-xl">
      <input
        type="text"
        placeholder="Eg. tool"
        name="query"
        aria-label="Search models"
        className="w-full py-3 pl-5 pr-5 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base"
      />
    </Form>
  );
}
