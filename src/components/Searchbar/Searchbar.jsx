import React, { Component } from 'react';
import styles from "./Searchbar.module.scss"

class Searchbar extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <p className={styles.search}>Searchbar</p>

      </div>
     );
  }
}
 
export default Searchbar;