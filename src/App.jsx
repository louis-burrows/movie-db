import React, { Component } from 'react';
import styles from "./App.module.scss";
import Searchbar from "./components/Searchbar";
import Cardlist from "./components/Cardlist"

class MovieDB extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <p>The App</p>
        <Searchbar />
        <Cardlist />
      </div>

     );
  }
}
 
export default MovieDB;