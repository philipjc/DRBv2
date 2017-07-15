import React, { Component } from 'react';
import './Bullet.css';

class Bullet extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Bullet col-lg-3">
        <span className="Bullet__text">{this.props.text}</span>
      </div>
    )
  }
}

export default Bullet;
