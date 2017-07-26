import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import classNames from 'classnames';
import './InformationCard.css';

class InformationCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
    this.slideCard = this.slideCard.bind(this);
  }

  slideCard() {
    this.setState({
      active: !this.state.active
    })
  }

  renderCardWithSlideup() {

    const sliderClass = classNames({
      'InformationCard__slider': !this.state.active,
      'InformationCard__slider-active': this.state.active
    });

    return (
      <div className="InformationCard" onMouseOver={this.slideCard} onMouseOut={this.slideCard}>
        <div className="InformationCard__heading">
          <p>{this.props.heading}</p>
        </div>

        <div className={sliderClass}>
          <div className="InformationCard__text">
            <p>{this.props.info}</p>
          </div>
          <div className="InformationCard__popup">
            <Link to={'services/' + this.props.heading}>
              <p>show more</p>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  renderCardWithListItems() {
    return (
      <div className="InformationCard">
        <div className="InformationCard__heading">
          <p>{this.props.heading}</p>
        </div>

        <div className="InformationCard__list">
          <ul>
            {
              this.props.list.map((item, idx) => {
                return (
                  <li key={idx}>{item}</li>
                )
              })
            }
          </ul>
      </div>
        
      </div>
    )
  }

  render() {

    return this.props.list ? this.renderCardWithListItems() : this.renderCardWithSlideup();

  }
}

export default InformationCard;
