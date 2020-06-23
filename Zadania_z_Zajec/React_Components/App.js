import React from 'react';
import logo from './logo.svg';
import './App.css';

import HelloWorld from './components/HelloWorld';
import Clock from './components/clock';

import Message from './components/Messages';
import Click from './components/Exercises/Click.js';
import Picture from './components/Exercises/Picture.js';
import Columns from './components/Exercises/Columns.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Clock/>
          Adam's App<br></br>
        </p>
        <Click defaultValue={10} />
        <Click defaultValue={3} />
        <Picture src="https://www.startpage.com/av/proxy-image?piurl=http%3A%2F%2Fusapears.org%2Fwp-content%2Fuploads%2F2007%2F11%2Fseckel-pear.jpg&sp=1592846841T279d9d55d4a7000105b6e2bdf1a175494a8f9928b17659342c8719f5d3936dc3" alt="Pear" />
        <Message title="Tytuł 1" text="Paragraf pierwszy." />
        <Columns />
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
