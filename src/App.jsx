import React, { Component } from 'react';
import styles from "./App.module.scss";
import Searchbar from "./components/Searchbar";
import Cardlist from "./components/Cardlist"
import temporaryFilms from "./temporaryFilms"


class MovieDB extends Component {
  state = { 
    films: [],
    searchText: "",
  }

  

  // the below two fucntions are in-progress attempts to make the page show movies prior to there being any searchs

  // showSomethingBeforesearch = () => {
  //   if (!this.state.searchText) {
  //     this.setState({
  //       films: temporaryFilms
  //     })
  //   }
  // }


  // ternary operator
  // ifNoSearchText = () => {
  //   this.state.searchText ? this.fetchMovies() : null;
  // }


  // this function grabs data from the API in accordance to the text entered in the searchbar, and is run when the button is pressed

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


  // this function updates the state of searchText with each input witin the search bar text box

  updateSearchText = (textInput) => {
    this.setState({
        searchText: textInput.target.value
    });
  }

 

  //functions are passed to the searchbar, and the data which is retrieved is passed to the card list

  render() { 

    return ( 
      <div className={styles.appContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.mainTitle}>Movie Database</h1>
          <h3 className={styles.subTitle}>Enter a word and marvel at what comes back!</h3>
        </div>
        <Searchbar updateSearchText={this.updateSearchText} handleClick={this.fetchMovies} />
        <Cardlist films={this.state.films}/>

      </div>

     );
  }
}
 
export default MovieDB;






// Here is your key: 2e1d8a0d

// Please append it to all of your API requests,

// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=2e1d8a0d