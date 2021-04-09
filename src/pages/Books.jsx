import axios from 'axios';
import { Component } from 'react';

import BookList from '../components/BookList';

class Books extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const response = await axios.get('http://localhost:3004/books');

    console.log(response.data);

    this.setState({ books: response.data });
  }

  render() {
    return (
      <>
        <h1>Это страница книг!</h1>
        <BookList books={this.state.books} />
      </>
    );
  }
}

export default Books;
