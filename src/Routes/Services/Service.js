import React, { Component } from 'react';

import Management from '../Management/Management';
import Maintenance from '../Maintenance/Maintenance';

export const Service = ({ match }) => {
  
  if (match.params.serviceName === 'management') {
    return (
      <Management />
    )
  }
  else {
    return (
      <Maintenance />
    )
  }
}