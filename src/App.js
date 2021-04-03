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

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    todos: [],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {
      localStorage.setItem('todos', JSON.stringify(nextTodos));
    }

    // if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
    //   this.toggleModal();
    // }
  }

  //Получаем новую туду из ТудуЕдитор!
  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));

    this.toggleModal();
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    //   this.setState(prevState => ({
    //     todos: prevState.todos.map(todo => {
    //       if (todo.id === todoId) {
    //         return {
    //           ...todo,
    //           completed: !todo.completed,
    //         };
    //       }

    //       return todo;
    //     }),
    //   }));
    // };
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  formsubmitHandler = data => {
    console.log(data);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalaizedFilter = filter.toLocaleLowerCase(); //Привели фильтр в нижний регистр. в объекте так нельзя...

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalaizedFilter),
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { todos, filter, showModal } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <Container>
        <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
          <AddIcon width="40" height="40" fill="white" />
        </IconButton>
        {/* <h1>Состояние компонента</h1> */}
        {/* <Clock /> */}

        {/* <Tabs items={tabs} /> */}

        {/* <button type="button" onClick={this.toggleModal}>
          Открыть модалку
        </button> */}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSubmit={this.addTodo} />
            {/* <h2>Привет это контент модалки как children</h2>
            <p>
              Lorem50sdfasdf asdf asdf asdf sdafadsf asdf asdfdsfsf sdafasdfasdf
              adfsdfsdsddf dsfsdfdf dsf dsfsddddd
            </p>
            <button type="button" onClick={this.toggleModal}>
              Закрыть
            </button> */}
          </Modal>
        )}

        {/* <Counter /> */}

        {/* <Form onSubmit={this.formsubmitHandler} /> */}

        {/* <Dropdown /> */}

        {/* <ColorPicker options={colorPickerOptions} /> */}

        <div>
          <p>Общее количество: {totalTodoCount}</p>
          <p>Количество выполненных: {completedTodoCount}</p>
        </div>

        {/* <TodoEditor onSubmit={this.addTodo} /> */}

        <FilterTodo value={filter} onChange={this.changeFilter} />

        <TodoList
          todos={visibleTodos} //Рендерим не весь стек Тудушек, а только отфильтрованные.
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </Container>
    );
  }
}

export default App;
