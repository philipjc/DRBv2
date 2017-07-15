import React, { Component } from 'react';
import Bullet from './components/Bullet/Bullet';
import './Bullets.css';

class Bullets extends Component {
  constructor(props) {
    super(props);

  }

  renderBullets() {
    return this.props.bullets.map((bullet, idx) => <Bullet text={bullet} key={idx} />)
  }

  render() {
    return (
      <div className="Bullets row between-lg-3">
       {this.renderBullets()}
      </div>
    )
  }
}

export default Bullets;
