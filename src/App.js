import React, { Component } from 'react';
import Nav from '../src/components/nav';
import Gallery from '../src/components/gallery';
import Footer from '../src/components/footer';

class App extends Component {

  render () {
    return (
          <div className="App">
            <Nav />
            <Gallery />
            <Footer />
          </div>
    );
  }
}

export default App;
