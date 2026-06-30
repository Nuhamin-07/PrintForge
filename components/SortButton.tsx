export default function SortButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button
      className={
        "px-3 py-1.5 text-sm rounded-full border cursor-pointer border-gray-300 text-gray-700 hover:bg-gray-100"
      }
    >
      {children}
    </button>
  );
}
