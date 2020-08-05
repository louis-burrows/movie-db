import React, { Component } from 'react';
import styles from "./Card.module.scss"

class Card extends Component {
  state = {  }
  render() { 

    //this is another deconstruction of each individual film passed down as props
    const { film } = this.props;
    console.log(film);

    return ( 
      <div>
      
        {/* this section outlines the construct for which the information will be displayed in each film card */}
        
        <section>
          <h2>Title: {film.Title}</h2>
          <p>Year: {film.Year}</p>
          <p>IMDB ID: {film.imdbID}</p>
          <p>Type: {film.Type}</p>
          <img src={film.Poster} alt="poster"/>
        </section>

      </div>
     );
  }
}
 
export default Card;