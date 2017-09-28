import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PhotoList, { BigImage } from './images';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Gallery</h2>
        </div>
        <BigImage />
        <PhotoList />
      </div>
    );
  }
}

export default App;
