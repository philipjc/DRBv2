import React, { Component } from 'react';
import Contact from '../../components/Contact/Contact';
import Jumbotron from '../../components/Jumbotron/Jumbotron';

import './Maintenance.css';


class Maintenance extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const para = `It is inevitable after time our homes require a bit of TLC. 
          We can fix most bumps and bruises around the home, but sometimes a new item is needed. 
          We source good quility products with a manufacturers guarantee. 
          It's your option, but we can offer our professional advice.`;

    return (
      <div className="Maintenance">

        <Jumbotron 
          smallText='Maintenance'
          mediumText={para}
        />

        <Contact />
      </div>
    )
  }
}

export default Maintenance;
