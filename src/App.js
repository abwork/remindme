import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Remindy</h1>
        </header>
        <div className="form-inline">
          <div className="form-group">
            <input
              className="form-comtrol"
              placeholder="Stuff to do..."
            />
          </div>
          <button
            type="button"
            className="btn btn-success" 
          >
          Add Reminder
          </button>
        </div>
       </div>
    );
  }
}

export default App;
