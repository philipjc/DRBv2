import React, { Component } from 'react';
import Contact from '../../components/Contact/Contact';

import './Maintenance.css';


class Maintenance extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Maintenance">
        <h2>Maintenance</h2>
        <p>
          It is inevitable after time our homes require a bit of TLC. 
          We can fix most bumps and bruises around the home, but sometimes a new item is needed. 
          We source good quility products with a manufacturers guarantee. 
          It's your option, but we can offer our professional advice.
        </p>

        <Contact />
      </div>
    )
  }
}

export default Maintenance;
