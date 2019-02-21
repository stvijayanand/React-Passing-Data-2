import React, { Component } from "react";

class MovieBuff extends Component {
  render() {
    return <li key={this.props.userName}>{this.props.userName}</li>;
  }
}

class MovieLikersList extends Component {
  render() {
    const profilesList = this.props.profiles.filter(
      profile => this.props.movieId === Math.trunc(profile.favoriteMovieID)
    );

    /*for(const profile of profilesList){
                console.log("profile: " + profile.userID);   
            }*/
    //console.log("profilesList: " + (profilesList.length));

    let elementReturned = <p>None of the current users liked this movie</p>;

    if (profilesList.length > 0) {
      let usersWithMovies = [];
      usersWithMovies = profilesList.map(filteredProfile => {
        const users = Object.values(this.props.users).filter(
          user => user.id === Math.trunc(filteredProfile.userID)
        );
        return users[0];
      });
      elementReturned = (
        <ul className="list-favorite-movies">
          {usersWithMovies.map(userMovie => {
            let userReturned = <p>Empty</p>;
            if (userMovie) {
              userReturned = <MovieBuff userName={userMovie.name} />;
            }
            return userReturned;
          })}
        </ul>
      );
    }

    //console.log("elementReturned: " + elementReturned);

    return elementReturned;
  }
}

class MoviesLikedBy extends Component {
  render() {
    return (
      <ul>
        {Object.values(this.props.movies).map(movie => (
          <li key={movie.id}>
            <h2>{movie.name}</h2>
            <p>Liked By:</p>
            <MovieLikersList
              movieId={movie.id}
              profiles={this.props.profiles}
              users={this.props.users}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default MoviesLikedBy;
