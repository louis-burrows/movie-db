import React, { Component } from 'react';
import styles from "./Searchbar.module.scss"

class Searchbar extends Component {
  state = {  }
  render() { 
    return ( 
      <div>

        {/* functions are passed to both the input box and button, and these will run in App.jsx and set the state in App */}

        <p className={styles.search}>Searchbar</p>
        <input type="text" onInput={this.props.updateSearchText} />
        <button onClick={this.props.handleClick}>Fetch info from Api</button>
      </div>
     );
  }
}
 
export default Searchbar;