import React, { Component } from 'react';
import {Provider} from 'react-redux';
// import './App.css';
import store from './redux/Store.js';
import Todo from './views/Todo.js';
import AddTodo from './views/AddTodo.js';
import Done from './views/Done.js';
class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div>
          <Provider store={store}>
            <AddTodo></AddTodo>
            <Todo></Todo>
            <Done></Done>
          </Provider>
        </div>

    );
  }

}

export default App;
