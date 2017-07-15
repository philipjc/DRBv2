import React, { Component } from 'react';
import Item from './components/Item/Item';
import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  renderContactItems() {
    return this.props.list.map((item, idx) => {
      return <Item name={item.value} width={this.props.size} key={idx} />
    });
  }

  render() {

    const items = this.renderContactItems();
    return (
      <div className="Contact row around-lg">
        {items}      
      </div>
    );
  }
}

export default Contact;
