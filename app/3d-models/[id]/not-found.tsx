import NotFoundUI from "@/components/NotFoundUI";

export default function ModelNotFound() {
  return (
    <NotFoundUI
      title="Model Not Found"
      subtitle="Sorry, we couldn't find the requested model!"
      link_text="Go Back Home"
      link_href="/"
    />
  );
}
