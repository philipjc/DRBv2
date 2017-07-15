import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'Item col-lg-'+this.props.width}>
        <span>{this.props.name}</span>
      </div>
    );
  }
}

export default Item;
