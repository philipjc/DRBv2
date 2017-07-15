import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'Input__'+this.props.name}>
        <label>
          {this.props.label}
          <input type={this.props.type} name={this.props.name} value={this.props.value} />
        </label>
      </div>
    )
  }
}

export default Input;
