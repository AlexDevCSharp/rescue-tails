// src/components/Pagination.tsx
type Props = {
  current: number;
  total: number;
};

const Pagination = ({ current, total }: Props) => {
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  return (
    <div className="flex justify-center gap-2 text-sm">
      <button className="text-gray-400" disabled={current === 1}>
        &lt;
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`w-8 h-8 rounded-full ${
            current === page
              ? "bg-gray-800 text-white"
              : "text-gray-600 hover:bg-gray-200"
          }`}
        >
          {page}
        </button>
      ))}
      <button className="text-gray-600" disabled={current === total}>
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
