import React from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import HeaderBar from './components/Header';
import Main from './components/Main';
import Album from './components/Album';
import Footer from './components/Footer';
import Skills from './components/Skills';


class Webportfolio extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <CssBaseline/>
            <div className="App">
              <HeaderBar />
              <Main />
              <Skills />
              <Album />
              <Footer />
            </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
};

export default Webportfolio;
