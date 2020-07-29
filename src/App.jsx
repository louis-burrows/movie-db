import React, { Component } from 'react';
import styles from "./App.module.scss";
import Searchbar from "./components/Searchbar";
import Cardlist from "./components/Cardlist"
import films from "./data";

class MovieDB extends Component {
  state = {  }

  fetchMovies = () => {
    alert("the button works")
  }


  render() { 

    const exampleFilm = films[0]

    return ( 
      <div>
        <p>The App</p>
        <Searchbar />
        <Cardlist />

        <button onClick={this.fetchMovies}>Fetch info from Api</button>

        <h2>Title: {exampleFilm.Title}</h2>
        <p>Year: {exampleFilm.Year}</p>
        <p>IMDB ID: {exampleFilm.imdbID}</p>
        <p>Type: {exampleFilm.Type}</p>
        <img src={exampleFilm.Poster} alt="poster"/>

      </div>

     );
  }
}
 
export default MovieDB;

// Here is your key: 2e1d8a0d

// Please append it to all of your API requests,

// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=2e1d8a0d