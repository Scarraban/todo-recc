import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import Panel from '../Panel';

class RoutinePanel extends Panel {
  constructor(props) {
    super(props);

    this.state = {
      panelOptions: {
        title: 'My Routine',
        view: 'Daily'
      };
    }
  }
  render() {
    const panelOptions = this.state.panelOptions;
    return (
      <div className="panel">
        <div className="panel__title">
          <h2>{panelOptions.title - panelOptions.view}</h2>
        </div>
      </div>
    )
  }
}

export default RoutinePanel;
