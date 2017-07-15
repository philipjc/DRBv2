import React, { Component } from 'react';
import InformationCard from '../InformationCard/InformationCard';
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
  }

  render() {
    return (
      <div className="InformationCards">
        <InformationCard 
          heading="maintenance"
          info={maintenaceData.text}
          popup={true}
        />
        <InformationCard
          heading="management"        
          info={managementData.text}
          popup={true}          
        />
        <InformationCard
          heading="services"
          list={servicesList}
          popup={false}          
        />
      </div>
    )
  }
}

export default InformationCards;
