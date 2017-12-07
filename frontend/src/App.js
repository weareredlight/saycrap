import React, { Component } from 'react';
import $ from 'jquery';

import logo from './logo.svg';
import './App.css';


// procurar javascript reduce e tentem trocar isto para um reduce
const arrayToObject = (arr) => {
  const obj = {};
  arr.forEach((el) => obj[el.id] = el.text);
  return obj;
};

const Item = ({ id, text }) => {
  return <li key={id}>{text}</li>;
};


class App extends Component {

  state = {
    currentCrap: '',
    messages: {
      '1': 'cenas',
      '2': 'fixes'
    }
  }

  componentWillMount() {
    $.getJSON('http://localhost:3000/craps.json')
      .done((r) => this.setState({ messages: arrayToObject(r) }));
  }

  handleInput = (e) => {
    this.setState({ currentCrap: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    $.post(
      'http://localhost:3000/craps.json',
      { crap: { text: this.state.currentCrap } }
    ).then((r) => this.setState({
      currentCrap: '',
      messages: { ...this.state.messages, [r.id]: r.text }
    }));
  }

  // tentem acrescentar a possibilidade de fazer update de mensagens
  handleUpdate = (id, text) => {
    $.put(`http://localhost:3000/craps/${id}.json`, { crap: { text }})
      .then((r) => this.setState({
        currentCrap: '',
        messages: { ...this.state.messages, [r.id]: r.text }
      }));
  }

  // e ja agora tentem tambem acrescentar a possibilidade de delete
  // $.post(`http://localhost:3000/craps/${id}.json`, { method: '_delete' })

  render() {
    const { currentCrap, messages } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul>
          {Object.keys(messages).map((id) => Item({ id, text: messages[id] }))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input value={currentCrap} onChange={this.handleInput} />
        </form>
      </div>
    );
  }
}

export default App;
