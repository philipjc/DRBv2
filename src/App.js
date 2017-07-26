import React, { Component } from 'react';
import Home from './Routes/Home/Home';
import Main from './Routes/Main/Main';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className='App'>

        <Main />

      </div>
    );
  }
}

export default App;
