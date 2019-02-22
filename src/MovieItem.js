import React, { Component } from "react";
import UsersList from "./UsersList";

class MovieItem extends Component {
  render() {
    const { movie, usersWhoLikedMovie, users } = this.props;

    return (
      <li key={movie.id}>
        <h2>{movie.name}</h2>
        <p>Liked By:</p>
        <UsersList usersWhoLikedMovie={usersWhoLikedMovie} users={users} />
      </li>
    );
  }
}

export default MovieItem;
