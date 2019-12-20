import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  render() {
    const { item } = this.props;
    return (
      <div>
        {item.id}
      </div>
    );
  }
}
