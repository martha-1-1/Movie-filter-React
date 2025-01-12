import { useState } from "react";

interface FilterProps {
  onFilter: (filters: { title: string; rating: string }) => void;
}

export function Filter({ onFilter }: FilterProps) {
  const [title, setTitle] = useState<string>("");
  const [rating, setRating] = useState<string>("");

  const handleFilter = () => {
    onFilter({ title, rating });
  };

  return (
    <div className="flex gap-4 mb-6">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Filter by title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="flex-1">
        <input
          type="number"
          min="0"
          max="10"
          placeholder="Filter by rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        onClick={handleFilter}
        className="bg-blue-500 hover:bg-blue-300 text-white px-4 py-2 rounded-full"
      >
        Filter
      </button>
    </div>
  );
}
