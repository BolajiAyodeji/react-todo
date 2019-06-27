import React,{ Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currrentItem: {text: '', key: ''},
    }
  }
  handleInput = (e) => {
    console.log('test')
  }
  addItem = (e) => {
    e.preventDefault();
    console.log('addddd')
  }
  render() {
    return (
      <div className="App">
        <TodoList addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
