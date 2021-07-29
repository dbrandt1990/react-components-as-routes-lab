import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>

      {actors.map((actor, i) => {
        return (
          <div key={i}>
            <h3>Name: {actor.name} </h3>
            <label>Movies: </label>
            <ul>
              {actor.movies.map((movie, i) => {
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
};

export default Actors;
