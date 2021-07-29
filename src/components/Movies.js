import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, i) => {
        return (
          <div key={i}>
            <h3>Name: {movie.title}</h3>
            <p>Time: {movie.time}</p>
            <label>Genres:</label>
            <ul>
              {movie.genres.map((genre, i) => {
                return (

                  <li key={i + 100}>{genre}</li>
                )
              })}
            </ul>
          </div>
        )
      })}

    </div>
  );
};

export default Movies;
