import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import InformationCards from '../../components/InformationCards/InformationCards';
import Contact from '../../components/Contact/Contact';
import logo from '../../assets/img/2.png';

import './Home.css';


class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Home">
        <Header 
          logo={logo} 
        />

        <Jumbotron 
          smallText="The company that cares about your home"
          largeText="Covering all aspects of property maintenance" 
        />

        <InformationCards />      

        <Contact />

      </div>
    );
  }
}

export default Home;
