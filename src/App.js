import React, { Component } from 'react';
import Nav from '../src/components/nav';
import Gallery from '../src/components/gallery';
import Footer from '../src/components/footer';
import Lightbox from './components/lightbox';

class App extends Component {

  state = {
    collection: '1'
  };

  handleCollectionState = (event) => {
    
    const galleryItems = document.querySelectorAll('.galleryItem');
      galleryItems.forEach(item => {
        item.classList.remove('fadein');
      });

    const newCollection = event.target.getAttribute('data-collection');

    setTimeout(function() {
      this.setState({ collection: newCollection});
    }.bind(this), 300);

  };

  render () {
    return (
          <div className="App">
            <Lightbox />
            <Nav handleCollectionState={this.handleCollectionState} />
            <Gallery collection={this.state.collection} />
            <Footer />
          </div>
    );
  }
}

export default App;
