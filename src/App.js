import React from 'react';
import logo from './logo.svg';
import './App.css';
import Alert from 'react-bootstrap/Alert';

function App() {
  return (
    <div className="App">
      <Alert variant="primary">
        This is a bootstrap element!
      </Alert>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to the Future of IBM Energy Trust</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
