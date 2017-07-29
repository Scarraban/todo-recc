import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import Title from './components/title/Title';

class App extends Component {
  render() {
    return (
      <div className="box">
        <Title/>
      </div>
    );
  }
}

export default App;
