import React, { Component } from 'react';
import { Link, Router, BrowserRouter } from 'react-router-dom';
import classNames from 'classnames';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: false
    }

    this.animateHeaderSmall = this.animateHeaderSmall.bind(this);
    this.animateHeaderLarge = this.animateHeaderLarge.bind(this);    
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleWindowScrollEvent.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleWindowScrollEvent);
  }

  shouldComponentUpdate() {
    // compare state or props
    return true;
  }

  animateHeaderSmall() {
    console.log('animated small');
    this.setState({
      scrolled: true
    });

    console.log(this.state.scrolled);
  }

  animateHeaderLarge() {
    console.log('big header');
    this.setState({
      scrolled: false
    });
    
    console.log(this.state.scrolled);
    
  }

  handleWindowScrollEvent(e) {
    console.log('scrolled', e.srcElement.body.scrollTop);
    // perform y up or down catch and other differences
    if (e.srcElement.body.scrollTop > 120) {
      this.animateHeaderSmall();
    } else {
      this.animateHeaderLarge();
    }
  }

  render() {

    console.log(this.props.location);

    const headerClass = classNames('Header', {
      'active': this.state.scrolled === true,
    });

    const imageClass = classNames('Header__img', {
      'active': this.state.scrolled === true,
    });

    const listClass = classNames('Header__list', {
      'active': this.state.scrolled === true,
    });

    // TODO Use CSS-JS and Observables to control header height on scroll height event.

    return (
      <div className="Header__wrapper">
        <div className={headerClass}>
          <div className={imageClass}>
            <img src={this.props.logo} alt="DRB logo" />          
          </div>

          <nav className={listClass}>
            <Link to='/home'><span>Home</span></Link>
            <Link to='/services/management'><span>Services</span></Link>
            <a href="#contact">Contact</a>
          </nav>
        
        </div>
      </div>
    );
  }
}

export default Header;
