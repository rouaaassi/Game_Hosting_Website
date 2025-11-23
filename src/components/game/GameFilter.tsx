interface GameFilterProps {
  categories: string[];
  activeCategories: string[];
  onChange: (category: string) => void;
  onClear?: () => void;
}

export default function GameFilter({ categories, activeCategories, onChange, onClear }: GameFilterProps) {
  return (
    <div className="flex gap-3 mb-6 flex-wrap items-center">
      {categories.map((cat) => {
        const isActive = activeCategories.includes(cat);
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`
              px-4 py-2 rounded-full border transition
              ${isActive
                ? "bg-neonGreen text-green-800 border-neonGreen shadow-[0_0_10px_#00ff37]"
                : "border-green-700/40 text-gray-300 hover:text-white hover:border-neonGreen"
              }
            `}
          >
            {cat}
          </button>
        );
      })}

      {activeCategories.length > 0 && onClear && (
        <button
          onClick={onClear}
          className="px-4 py-2 rounded-full border border-red-600 text-red-400 hover:text-white hover:border-red-500 transition"
        >
          Clear Filters
        </button>
      )}
    </div>
  );
}
