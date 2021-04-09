import axios from 'axios';
import { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <ul>
          {this.state.books.map(book => (
            <li key={book.id}>
              <Link to={`${this.props.match.url}/${book.id}`}>
                {book.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Books;
