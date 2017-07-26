import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import {Service} from './Service';
import Header from '../../components/Header/Header';

import logo from '../../assets/img/2.png';
import './Services.css';


class Services extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Services">
        <Header 
          logo={logo} 
        />

        <ul>
          <li>
            <Link to={`${this.props.match.url}/management`}>management</Link>
          </li>  
          <li>
            <Link to={`${this.props.match.url}/maintenance`}>maintenance</Link>            
          </li>
        </ul> 

        <Route path={`${this.props.match.url}/:serviceName`} component={Service}/>
        
        <Route exact path={this.props.match.url} render={() => (
          <h3>Please select a service.</h3>
        )}/>
      </div>
    );
  }
}

export default Services;
