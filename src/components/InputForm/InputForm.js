import React, { Component } from 'react';
import Form from './components/Form/Form';
import './InputForm.css';

const ACTION = 'https://formspree.io/dale1966@hotmail.com';
const TYPE = 'POST';

class InputForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="InputForm row">
        <Form action={ACTION} method={TYPE} />
      </div>
    )
  }
}

export default InputForm;
