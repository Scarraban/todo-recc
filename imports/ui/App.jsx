import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import RoutinePanel from './components/panel/subs/Routine';

class App extends Component {
  render() {
    return (
      <div className="box">
        <div className="titleBar">
          <h1>Hello world!</h1>
        </div>
        <Switch>
          <Route exact path="/" component={RoutinePanel}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
