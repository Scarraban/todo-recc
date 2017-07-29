import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import Navigation from '../navigation/Navigation';

class Title extends Component {
  render() {
    return (
      <div className="titleBar">
        <h1>Todo App</h1>
        <Navigation/>
      </div>
    )
  }
}

export default Title;
