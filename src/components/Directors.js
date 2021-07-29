import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>

      {directors.map((director, i) => {
        return (
          <div key={i}>
            <h3>Name: {director.name} </h3>
            <label>Movies: </label>
            <ul>
              {director.movies.map((movie, i) => {
                return (
                  <li key={i + 100}>
                    {movie}
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  );
}

export default Directors
