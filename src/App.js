import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    checkbox1: false,
    checkbox2: false,
    checkbox3: false
  }
  render() {
    return (
      <div className="outerDiv">
        <h1 className="App-header">Checkbox Test</h1>
        <form className="App">
          <p>Checkbox</p>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
