import { useParams, Link } from "@remix-run/react";
import { Movie } from "~/types/movie";

const movies: Movie[] = [
  {
    title: "The Aviator",
    description: "A mind-bending thriller.",
    posterURL:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcShznJAjVg4egEmR_gBTIDeswVPZPX4cNPPRvdzRUz8q_iKNaDI",
    rating: 9.7,
  },
  {
    title: "Venom:The Last Dance",
    description: "Action",
    posterURL:
      "https://th.bing.com/th?id=OIP.p8LDAiDdq9vZmlqDw7yPtwHaLG&w=200&h=200&c=12&rs=1&p=0&o=6&dpr=1.3&pid=23.1",
    rating: 8.5,
  },
  {
    title: "  Wicked ",
    description: "Thriller",
    posterURL:
      "https://th.bing.com/th?id=OSK.u3XcxYMOy16pVYIbrsUSu_bBJSh-GmWO8O9c9f6eV_o&w=312&h=200&c=3&rs=1&o=6&dpr=1.3&pid=SANGAM",
    rating: 8.5,
  },
  {
    title: "  Joker ",
    description: "Drama",
    posterURL:
      "https://www.bing.com/th?id=OIP.avVqARSelM_drxOJWctJ3AHaLH&w=155&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    rating: 7.8,
  },
  {
    title: " Bhool Bhulaiyaa",
    description: "Comedy",
    posterURL:
      "https://th.bing.com/th?id=OVP.HxzNsZiIDr38lVhTS7Y0gwHgFo&w=400&h=225&c=7&rs=1&qlt=90&o=6&dpr=1.3&pid=1.7",
    rating: 9.4,
  },
  {
    title: " Mufasa:The King Lion",
    description: "Animation",
    posterURL:
      "https://th.bing.com/th?id=OSK.WG5Rx3ZhUlPNNrl7pfmlZJwLpVEqK-CxUx9rVn6EWqo&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.3&pid=SANGAM",
    rating: 6.7,
  },
];

export default function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === id);

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        src={movie.trailer}
        width="560"
        height="315"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
