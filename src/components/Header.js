import React, { Component } from 'react';

class Header extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <h1 className="f2">ROBOFRIENDS</h1>;
  }
}

export default Header;
