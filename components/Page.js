import React, { Component } from 'react';

class Page extends Component {
  render() {
    return (
      <div>
        <p>Hey I'm on every single page like a boss</p>
        {this.props.children}
      </div>
    )
  }
}

export default Page;