import React from 'react';
import HeaderBar from './components/Header';
import './App.css';

class Webportfolio extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <HeaderBar />
        </div>
      </React.Fragment>
    );
  }
};

export default Webportfolio;
