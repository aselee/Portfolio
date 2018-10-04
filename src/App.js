import React, { Component } from 'react';
import AppBar from './components/AppBar';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div className="App">
      <AppBar />
      </div>
      </React.Fragment>
    );
  }
}

export default App;
