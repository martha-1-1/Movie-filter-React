import React from "react";

interface Movie {
  title: string;
  description: string;
  posterURL: string;
  rating: number;
}

const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg max-w-xs mx-auto">
      <img
        className="w-full h-48 object-cover rounded-md"
        src={movie.posterURL}
        alt={`${movie.title} Poster`}
      />
      <h3 className="mt-2 text-xl font-semibold">{movie.title}</h3>
      <p className="text-sm text-gray-500">{movie.description}</p>
      <p className="mt-2 text-sm text-gray-700">Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
