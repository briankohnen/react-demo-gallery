import React, { Component } from 'react';
import Nav from '../src/components/nav';
import Gallery from '../src/components/gallery';
import Footer from '../src/components/footer';
import Lightbox from './components/lightbox';

class App extends Component {

  render () {
    return (
          <div className="App">
            <Lightbox />
            <Nav />
            <Gallery />
            <Footer />
          </div>
    );
  }
}

export default App;
