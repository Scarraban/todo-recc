import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import RoutinePanel from './components/panel/subs/Routine';
import Title from './components/title/Title';

class App extends Component {
  render() {
    return (
      <div className="box">
        <Title/>
        <Switch>
          <Route exact path="/" component={RoutinePanel}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
