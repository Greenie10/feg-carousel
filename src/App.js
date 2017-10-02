// import React from 'react';
// import HelloWorldList from './HelloWorldList';
// import './App.css';
//
// const App = () => {
//   return (
//     <div className="App">
//       <HelloWorldList />
//     </div>
//   );
// };
//
// export default App;

import React, { Component } from 'react';
import './App.css';

import BigImage from './images';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BigImage />
      </div>
    );
  }
}

export default App;
