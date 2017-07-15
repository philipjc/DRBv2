import React, { Component } from 'react';
import classNames from 'classnames';
import './InformationCard.css';

class InformationCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
    this.slideCard = this.slideCard.bind(this);
    this.renderListItems = this.renderListItems.bind(this);
  }

  slideCard() {
    this.setState({
      active: !this.state.active
    })
  }

  renderListItems() {
    return this.props.list.map((item, idx) => {
      return (
        <li key={idx}>{item}</li>
      )
    });
  }

  renderList() {
    return (
      <div className="InformationCard__list">
          <ul>
            {this.renderListItems()}
          </ul>
      </div>
    )
  }

  renderPopUp() {
    return (
      <div className="InformationCard__popup">
        <p>show more</p>
      </div>
    )
  }

  render() {

    const sliderClass = classNames({
      'InformationCard__slider': !this.state.active,
      'InformationCard__slider-active': this.state.active
    });

    const renderedElement = this.props.list ? this.renderList() : this.renderPopUp();

    return (
      <div className="InformationCard" onMouseOver={this.slideCard} onMouseOut={this.slideCard}>
        <div className="InformationCard__heading">
          <p>{this.props.heading}</p>
        </div>

        <div className={sliderClass}>
          <div className="InformationCard__text">
            <p>{this.props.info}</p>
          </div>
          {renderedElement}
        </div>
      </div>
    )
  }
}

export default InformationCard;
