import React from 'react';
import logo from './logo.svg';
import './App.css';

import HelloWorld from './components/HelloWorld';
import Clock from './components/clock';
import {
  zmienna,
} from './App.const';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Clock/>
          Adam's App<br></br>
          {zmienna}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;