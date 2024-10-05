import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get('http://localhost:5000/movies');
      setMovies(response.data);
    };

    fetchMovies();
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Movies</h1>
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-4" key={movie._id}>
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.genre}</p>
                <p className="card-text">{movie.director}</p>
                <p className="card-text">{movie.releaseYear}</p>
                <p className="card-text">{movie.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
