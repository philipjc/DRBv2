import React, { Component } from 'react';
import './Jumbotron.css';

class Jumbotron extends Component {
  constructor(props) {
    super(props);
  }

  renderSmallText() {
    return (
      <div className="Jumbotron__detail__small">
          {this.props.smallText}
      </div>  
    )
  }

  renderMediumText() {
    return (
      <div className="Jumbotron__detail__medium">
        {this.props.mediumText}
      </div>
    )
  }

  renderLargeText() {
    return (
      <div className="Jumbotron__detail__large">
        {this.props.largeText}
      </div>
    )
  }

  render() {

    const smallInfo = this.props.smallText ? this.renderSmallText() : null;
    const mediumInfo = this.props.mediumText ? this.renderMediumText() : null;
    const largeInfo = this.props.largeText ? this.renderLargeText() : null;    

    return (
      <div className="Jumbotron">
        {smallInfo}           
        {mediumInfo}
        {largeInfo}
      </div>
    );
  }
}

export default Jumbotron;
