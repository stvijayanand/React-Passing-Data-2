import React, { Component } from "react";
import MovieItem from "./MovieItem";

class MoviesLikedBy extends Component {
  render() {
    const { movies, usersWhoLikedMovie, users } = this.props;

    return (
      <ul>
        {Object.values(movies).map(movie => {
          return (
            <MovieItem
              movie={movie}
              usersWhoLikedMovie={usersWhoLikedMovie[movie.id]}
              users={users}
            />
          );
        })}
      </ul>
    );
  }
}

export default MoviesLikedBy;
