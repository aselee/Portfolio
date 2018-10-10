import React from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
import HeaderBar from './components/Header';
import Main from './components/Main';
import Album from './components/Album';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Contact from './components/Contact';



//////////////////////////////////////////////////////
// Using FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
// import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

library.add( fab, fas)
// library.add(fab, faCheckSquare )

//////////////////////////////////////////////////////

export class Webportfolio extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <div className="App">
            <HeaderBar />
            <Main />
            <Skills />
            <Album />
            <Contact />
            <Footer />
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
};

export default Webportfolio;
