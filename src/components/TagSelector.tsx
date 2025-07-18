import { useState } from "react";

type Props = {
  selected: string[];
  onChange: (tags: string[]) => void;
  options: string[];
};

const TagSelector = ({ selected, onChange, options }: Props) => {
  const [open, setOpen] = useState(false);

  const toggleTag = (tag: string) => {
    if (selected.includes(tag)) {
      onChange(selected.filter((t) => t !== tag));
    } else {
      onChange([...selected, tag]);
    }
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full border px-4 py-2 rounded-lg text-left"
      >
        {selected.length > 0 ? selected.join(", ") : "Select tags"}
      </button>

      {open && (
        <div className="absolute z-10 bg-white border mt-1 rounded-lg w-full max-h-48 overflow-y-auto shadow">
          {options.map((tag) => (
            <label
              key={tag}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selected.includes(tag)}
                onChange={() => toggleTag(tag)}
              />
              {tag}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default TagSelector;
