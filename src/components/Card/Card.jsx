import React, { Component } from 'react';
import styles from "./Card.module.scss"

class Card extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <p className={styles.card}>Card</p>
      </div>
     );
  }
}
 
export default Card;