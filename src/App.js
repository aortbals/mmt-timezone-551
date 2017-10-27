import React, { Component } from 'react';
import './App.css';
import moment from 'moment-timezone';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><a href="https://github.com/moment/moment-timezone/pull/551">moment-timezone #551</a></h1>
        </header>
        <p className="App-intro">
          If this renders, then there is no bug. The time is: {moment().format('LLLL zz')}
        </p>
      </div>
    );
  }
}

export default App;
