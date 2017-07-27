import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';

import App from '../imports/ui/App';

Meteor.startup(() => {
  render(
    <Router>
      <App/>
    </Router>,
    document.getElementById('app'));
});
