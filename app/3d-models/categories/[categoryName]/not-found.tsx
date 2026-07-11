import NotFoundUI from "@/components/NotFoundUI";

export default function CategoryNotFound() {
  return (
    <NotFoundUI
      title="Category Not Found"
      subtitle="Sorry, we couldn't find the requested category!"
      link_text="Go Back Home"
      link_href="/"
    />
  );
}
