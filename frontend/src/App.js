import React, { Component } from 'react';
import $ from 'jquery';

import logo from './logo.svg';
import './App.css';


const Item = ({ id, text }) => {
  return <li key={id}>{text}</li>;
};


class App extends Component {

  state = {
    currentCrap: '',
    messages: [
      { id: 1, text: 'cenas' },
      { id: 2, text: 'fixes' }
    ]
  }

  componentWillMount() {
    $.getJSON('http://localhost:3000/craps.json')
      .done((r) => this.setState({ messages: r }));
  }

  handleInput = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ currentCrap: e.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    $.post('http://localhost:3000/craps.json', { crap: { text: this.state.currentCrap } })
      .done((r) => this.setState({
        currentCrap: '',
        messages: [...this.state.messages, r]
      }));
  }

  render() {
    const { currentCrap, messages } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul>
          {messages.map(Item)}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input value={currentCrap} onChange={this.handleInput} />
        </form>
      </div>
    );
  }
}

export default App;
