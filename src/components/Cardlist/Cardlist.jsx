import React, { Component } from 'react';
import styles from "./Cardlist.module.scss"
import Card from "../Card"

class Cardlist extends Component {
  state = {  }
  render() { 

    //the prop of the film data is deconstructed here, and stored in this
    const {films} = this.props;

    return ( 
      
      <div>

        <p className={styles.cardlist}>Cardlist</p>
    
        {/* this data of the films passed down as props is mapped over, and each film is passed into an individual card template, to be rendered on the page. */}
        
        {films.map((film, index) => {
          return <Card key={index} film={film}/>
        })}

      </div>
     );
  }
}
 
export default Cardlist;