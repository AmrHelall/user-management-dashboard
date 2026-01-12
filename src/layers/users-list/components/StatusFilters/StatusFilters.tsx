type status = "all" | "active" | "inactive";
type StatusFiltersProps = {
  value: status;
  onChange: (value: status) => void;
};

export function StatusFilters({ value, onChange }: StatusFiltersProps) {
  return (
    <div className="mb-4 flex items-center gap-1">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={() => onChange("all")}
      >
        All
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={() => onChange("active")}
      >
        Active
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={() => onChange("inactive")}
      >
        Inactive
      </button>
    </div>
  );
}
