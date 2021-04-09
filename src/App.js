import React, { Component } from 'react';
import shortid from 'shortid';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown/Dropdown';
// import ColorPicker from './components/ColorPicker';
import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEditor';
// import Form from './components/Form';
import FilterTodo from './components/FilterTodo';
// import initialTodos from './data/todos.json';

import Container from './components/Container';
import Modal from './components/Modal';
import Clock from './components/Clock';
import Tabs from './components/Tabs';
import tabs from './tabs.json';
import IconButton from './components/IconButton';
import { ReactComponent as AddIcon } from './icons/add.svg';
import todosApi from './servises/todos-api';

import ArticlesView from './components/ArticlesView';

class App extends Component {
  render() {
    return (
      <Container>
        <ArticlesView />
      </Container>
    );
  }
}

export default App;
