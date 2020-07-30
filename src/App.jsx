import React, { Component } from 'react';
import styles from "./App.module.scss";
import Searchbar from "./components/Searchbar";
import Cardlist from "./components/Cardlist"


class MovieDB extends Component {
  state = { 
    films: [],
    searchText: "",
    searchYear: "",
   }


  fetchMovies = (searchText, searchYear) => {
    fetch(`http://www.omdbapi.com/?s=${searchText}&y=${searchYear}&apikey=2e1d8a0d`)
    .then(response => response.json())
    .then(data => {
      console.log(data.Search)
      this.setState({
        films: data.Search
      });
    })
    .catch(error => console.log(error))
  }

  // https://reactjs.org/docs/forms.html

  updateSearchText = (e) => {
    this.setState({
      searchText: e
    });
  }

  updateSearchYear = (e) => {
    this.setState({
      searchYear: e
    });
  }


  render() { 

    return ( 
      <div>

        <p>The App</p>
        <Searchbar />
        <Cardlist />

 
         
        
        <input type="text" placeholder="enter a search word" onInput={(e) => updateSearchText(e.target.value)} />

        <input type="text" placeholder="enter a year" onInput={(e) => updateSearchYear(e.target.value)}/>

        <button onClick={this.fetchMovies}>Fetch info from Api</button>

        {this.state.films.map((film, index) => {
          return (
            <section key={index}>
            <h2>Title: {film.Title}</h2>
            <p>Year: {film.Year}</p>
            <p>IMDB ID: {film.imdbID}</p>
            <p>Type: {film.Type}</p>
            <img src={film.Poster} alt="poster"/>
            </section>
          )
        })}

      </div>

     );
  }
}
 
export default MovieDB;






// Here is your key: 2e1d8a0d

// Please append it to all of your API requests,

// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=2e1d8a0d