import React,{ Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoItems from './components/TodoItems';

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currrentItem: {text: '', key: ''},
    }
  }
  handleInput = (e) => {
    const itemText = e.target.value
    const currrentItem = { text: itemText, key: Date.now() }
    this.state({
      currrentItem,
    })
  }
  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currrentItem
    if (newItem.text !== '') {
      console.log('new i')
      const items = [...this.state.items, newItem]
      this.state({
        items: items,
        currrentItem: { text: '', key: '' }
      })
    }
  }
  render() {
    return (
      <div className="App">
        <TodoList
         addItem={this.addItem}
         inputElement={this.inputElement}
         handleInput={this.handleInput}
         currrentItem={this.currrentItem}
        />
        <TodoItems entries={this.state.items} />
      </div>
    );
  }
}

export default App;
