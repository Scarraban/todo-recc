import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import NavLinkItem from './subs/NavLinkItem';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <nav>
          <ul>
            <NavLinkItem to="/" classname="link-item">
              <span>My Routine</span>
            </NavLinkItem>
          </ul>
        </nav>
      </div>
    )
  }
}
export default Navigation;
