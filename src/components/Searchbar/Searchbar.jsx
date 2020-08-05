import React, { Component } from 'react';
import styles from "./Searchbar.module.scss"

class Searchbar extends Component {
  state = {  }
  render() { 
    return ( 
      <div className={styles.search}>

        {/* functions are passed to both the input box and button, and these will run in App.jsx and set the state in App */}

        <input placeholder="Type in your search word(s)" type="text" onInput={this.props.updateSearchText} />
        <button onClick={this.props.handleClick}>Display the results!</button>
      </div>
     );
  }
}
 
export default Searchbar;