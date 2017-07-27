import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

class App extends Component {
  render() {
    return (
      <div className="box">
        <div className="titleBar">
          <h1>Hello world!</h1>
        </div>
      </div>
    );
  }
}

export default App;
