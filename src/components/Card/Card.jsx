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
        
        <section className={styles.theCard}>
          <h2 className={styles.theCardTitle}>{film.Title}</h2>
          <p className={styles.theCardYear}>Year: {film.Year}</p>
          <p className={styles.theCardID}>IMDB ID: {film.imdbID}</p>
          <p className={styles.theCardType}>Type: {film.Type}</p>
          <img src={film.Poster} alt="poster" className={styles.theCardPoster}/>
        </section>

      </div>
     );
  }
}
 
export default Card;