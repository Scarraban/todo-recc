import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

class Title extends Component {
  render() {
    return (
      <div className="titleBar">
        <h1>Todo App</h1>
      </div>
    )
  }
}

export default Title;
