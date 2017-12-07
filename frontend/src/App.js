import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const Item = ({ id, text }) => {
  return <li key={id}>{text}</li>;
};


class App extends Component {

  state = {
    messages: [
      { id: 1, text: 'cenas' },
      { id: 2, text: 'fixes' }
    ]
  }

  componentWillMount() {
    fetch('http://localhost:3000/craps.json')
      .then((r) => r.json())
      .then((json) => this.setState({ messages: json }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul>
        {this.state.messages.map(Item)}
        </ul>
      </div>
    );
  }
}

export default App;
