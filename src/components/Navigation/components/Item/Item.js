import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'Item col-lg-'+this.props.width}>
        <a href="#">{this.props.name}</a>
      </div>
    );
  }
}

export default Item;
