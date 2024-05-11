import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let moviesList = [
      {
        id: 1,
        title: "The Shawshank Redemption",
        release_date: "1994-10-14",
        runtime: 142,
        mpaa_rating: "R",
        description:
          "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      },
      {
        id: 2,
        title: "The Godfather",
        release_date: "1972-03-24",
        runtime: 175,
        mpaa_rating: "R",
        description:
          "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      },
      {
        id: 3,
        title: "The Dark Knight",
        release_date: "2008-07-18",
        runtime: 152,
        mpaa_rating: "PG-13",
        description:
          "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
      },
    ];

    setMovies(moviesList);
  }, []);

  return (
    <div className="text-center">
      <h2>Movies</h2>
      <hr />
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Movie</th>
            <th>Release Date</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => {
            return (
              <tr key={movie.id}>
                <td>
                  <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                </td>
                <td>{movie.release_date}</td>
                <td>{movie.mpaa_rating}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Movies;
