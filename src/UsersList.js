import React, { Component } from "react";

class UsersList extends Component {
  render() {
    const { usersWhoLikedMovie, users } = this.props;

    let elementReturned = <p>None of the current users liked this movie</p>;

    if (usersWhoLikedMovie && usersWhoLikedMovie.length > 0) {
      elementReturned = (
        <ul>
          {usersWhoLikedMovie.map(id => (
            <li key={id}>{users[id].name}</li>
          ))}
        </ul>
      );
    }

    return elementReturned;
  }
}

export default UsersList;
