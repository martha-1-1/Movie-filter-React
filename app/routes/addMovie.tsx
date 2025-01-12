import { useState } from "react";

interface Movie {
  title: string;
  description: string;
  posterURL: string;
  rating: number;
}

interface AddMovieProps {
  onAdd: (movie: Movie) => void;
}

export function AddMovie({ onAdd }: AddMovieProps) {
  const [newMovie, setNewMovie] = useState<Movie>({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewMovie((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(newMovie);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
      <input
        type="text"
        name="title"
        value={newMovie.title}
        onChange={handleChange}
        placeholder="Title"
        className="w-full p-2 border rounded"
      />

      <button
        type="button"
        onClick={handleSubmit}
        className="bg-pink-800 hover:bg-slate-400 text-black px-4 py-2 rounded-full"
      >
        Add Movie
      </button>
    </form>
  );
}
