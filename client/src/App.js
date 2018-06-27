import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './components/Form.js'

class App extends Component {
  componentDidMount() {
    fetch('/home')
    .then((res)=>res.json())
    .then(data => console.log(data))
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to YourLists</h1>
        </header>
        <br/>
        <br/>
        <Form/>
        <a href="/home">Go to express</a>
      </div>
    );
  }
}

export default App;
