import React, { Component } from 'react';
import InformationCard from '../InformationCard/InformationCard';
import classNames from 'classnames';

import './InformationCards.css';

import maintenaceData from './data/maintenanceInfo';
// import maintenaceImg from '../../assets/img/house1.jpg';

import managementData from './data/managementInfo';
// import managementImg from '../../assets/img/van.jpg';

const servicesList = [
  'construction',
  'carpentry',
  'plumbing',
  'electrics',
  'brick-work',
  'decorating'
];

class InformationCards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleWindowScrollEvent.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleWindowScrollEvent);
  }

  animateCardsUp() {

  }

  animateCardDown() {

  }

  animateCardsUp() {
    this.setState({
      scrolled: true
    });
  }

  animateCardDown() {
    this.setState({
      scrolled: false
    });
  }

  handleWindowScrollEvent(e) {
    console.log('scrolled', e.srcElement.body.scrollTop);
    // perform y up or down catch and other differences
    if (e.srcElement.body.scrollTop > 180) {
      this.animateCardsUp();
    } else {
      this.animateCardDown();
    }
  }

  render() {

     const cardsClass = classNames('InformationCards', {
      'active': this.state.scrolled === true,
    });

    return (
      <div className={cardsClass}>
        <InformationCard 
          heading="maintenance"
          info={maintenaceData.text}
        />
        <InformationCard
          heading="management"        
          info={managementData.text}
        />
        <InformationCard
          heading="services"
          list={servicesList}
        />
      </div>
    )
  }
}

export default InformationCards;
