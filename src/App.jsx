import React, { Component } from 'react';
import styles from "./App.module.scss";
import Searchbar from "./components/Searchbar";
import Cardlist from "./components/Cardlist"


class MovieDB extends Component {
  state = { 
    films: [],
    searchText: "",
   }

  // ternary operator
  // ifNoSearchText = () => {
  //   this.state.searchText ? this.fetchMovies() : null;
  // }


  fetchMovies = () => {
    fetch(`http://www.omdbapi.com/?s=${this.state.searchText}&apikey=2e1d8a0d`)
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

  updateSearchText = (textInput) => {
    this.setState({
        searchText: textInput
    });
  }

  // updateSearchYear = (e) => {
  //   this.setState({
  //     searchYear: e
  //   });
  // }


  render() { 

    console.log(this.state.searchText)

    return ( 
      <div>

        <p>The App</p>
        <Searchbar />
        <Cardlist />

 
         
        
        <input type="text" placeholder="enter a search word" onInput={(e) => this.updateSearchText(e.target.value)} />

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