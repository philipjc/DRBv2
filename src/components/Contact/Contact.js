import React, { Component } from 'react';
import InputForm from '../InputForm/InputForm';

import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id='contact' className="Contact">
        <InputForm />
      </div>
    );
  }
}

export default Contact;
