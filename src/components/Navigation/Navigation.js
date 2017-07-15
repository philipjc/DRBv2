import React, { Component } from 'react';
import Item from './components/Item/Item';
import './Navigation.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  renderNavigationItems() {
    return this.props.list.map((item, idx) => {
      return <Item name={item.value} width={this.props.size} key={idx} />
    });
  }

  render() {

    const items = this.renderNavigationItems();
    return (
      <div className="Navigation row">
        {items}      
      </div>
    );
  }
}

export default Navigation;
