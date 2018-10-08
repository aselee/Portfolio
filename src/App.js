import React from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import HeaderBar from './components/Header';
import Main from './components/Main';
import Album from './components/Album';
import Footer from './components/Footer';
import Skills from './components/Skills';


//////////////////////////////////////////////////////
// Using FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

library.add( fab )
// library.add(fab, faCheckSquare )

//////////////////////////////////////////////////////

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
