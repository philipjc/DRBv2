import React, { Component } from 'react';
import Input from '../Input/Input';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Form">
        <form action={this.props.action} method={this.props.method}>
          <Input type="text" label="name" name="name"/>
          <Input type="text" label="email" name="email" />
          <Input type="text" label="description" name="description" />
          
          <Input type="submit" label="submit" name="submit" value="submit"/>
        </form>
      </div>
    )
  }
}

export default Form;
