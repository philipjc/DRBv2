import React, { Component } from 'react';
import Contact from '../../components/Contact/Contact';
import Jumbotron from '../../components/Jumbotron/Jumbotron';

import './Management.css';


class Management extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Management">
      
        <Jumbotron 
          smallText='Management'
          mediumText='Are you a Letting Agents or Property Management company? 
            We can take care of you too. 
            We apply the same working ethic across the board. 
            We have strong relationships with our customers. 
            We offer speedy quotes, and a quick but quality job turn around. 
            DRB currently works closely with:'
        />
        
        <Contact />
      </div>
    )
  }
}

export default Management;
