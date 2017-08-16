import React, { Component } from 'react';
import './App.css';

class Form extends Component {
  
  state = {
    checkbox1: false,
    checkbox2: false,
    checkbox3: false
  }
  submit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  select = (key) => {
    var checkboxState = this.state;
    if (checkboxState[key] === false) {
      this.setState({[key]: true});
      return;
    }
    this.setState({[key]: false});
  }
  cursor = {
    cursor:'pointer'
  }
  render() {
    return (
      <div className="outerDiv">
        <h1 className="App-header">Checkbox Test</h1>
        <form onSubmit={this.submit} className="App">
          {this.props.label.map((name) => {
            return <p style={this.cursor} className={this.state.class} onClick={() => this.select(name)} key={name}>{name}</p>
          })}
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
