type SearchInputsProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchInputs({ value, onChange }: SearchInputsProps) {
  return (
    <div className="mb-4">
      <input
        className="border border-gray-300 rounded-md px-4 py-2 w-96 focus:outline-2 focus:outline-blue-500 "
        type="text"
        placeholder="Search users..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
