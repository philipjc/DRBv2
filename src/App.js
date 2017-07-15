import React, { Component } from 'react';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Jumbotron from './components/Jumbotron/Jumbotron';
import InformationCards from './components/InformationCards/InformationCards';

// import Navigation from './components/Navigation/Navigation';
// import About from './components/About/About';
// import Bullets from './components/Bullets/Bullets';
// import InputForm from './components/InputForm/InputForm';

import logo from './assets/img/2.png';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className='App'>

        <Header 
          logo={logo} 
        />

        <Jumbotron 
          smallText="The company that cares about your home"
          largeText="Covering all aspects of property maintenance" 
        />

        <InformationCards />

      </div>
    );
  }
}

export default App;
