import PaginationButton from "@/components/PaginationButton";

export default function PaginationControls({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) {
  const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="flex justify-center gap-1">
      {pagesArray.map((page) => (
        <PaginationButton
          key={page}
          page={page}
          isActive={page === currentPage}
        />
      ))}
    </div>
  );
}
