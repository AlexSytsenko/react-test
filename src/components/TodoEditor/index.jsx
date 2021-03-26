import React, { Component } from 'react';
import './TodoEditor.scss';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {};

  render() {
    return (
      <form className="TodoEditor">
        <textarea
          className="TodoEditor__textarea"
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="button" clasName="TodoEditor__buttton">
          Сохранить
        </button>
      </form>
    );
  }
}

export default TodoEditor;
