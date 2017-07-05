import React from 'react';
import '../style/NavLink.css';

class NavLink extends React.Component {
  render () {
    return (
      <a className="component-NavLink" href="#">
        <span className={`glyphicon glyphicon-${this.props.icon}`} aria-hidden='true'></span>
        <span>{this.props.children}</span>
      </a>
    );
  }
}

export default NavLink;