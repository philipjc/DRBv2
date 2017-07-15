import React, { Component } from 'react';
import './Jumbotron.css';

class Jumbotron extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Jumbotron">
        <div className="Jumbotron__motto">
          {this.props.smallText}
        </div>
        <div className="Jumbotron__detail">
          {this.props.largeText}
        </div>        
      </div>
    );
  }
}

export default Jumbotron;
