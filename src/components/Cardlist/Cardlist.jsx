import React, { Component } from 'react';
import styles from "./Cardlist.module.scss"
import Card from "../Card"

class Cardlist extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <p className={styles.cardlist}>Cardlist</p>
        <Card />
      </div>
     );
  }
}
 
export default Cardlist;