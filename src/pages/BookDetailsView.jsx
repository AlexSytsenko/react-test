import axios from 'axios';
import { Component } from 'react';

class BookDetailsView extends Component {
  state = {
    descr: null,
    genre: null,
    id: null,
    imgUrl: null,
    title: null,
    author: null,
  };

  async componentDidMount() {
    const { bookId } = this.props.match.params;
    const response = await axios.get(
      `http://localhost:3004/books/${bookId}?_expand=author`,
    );

    this.setState({ ...response.data });
  }

  render() {
    const { genre, id, title, descr, imgUrl, author } = this.state;
    return (
      <>
        <h1>Это страница одной книги{this.props.match.params.bookId}</h1>
        <img src={imgUrl} alt="" />
        <h2>{title}</h2>
        {author && <p>Автор: {author.name}</p>}
        <p>Жанр: {genre}</p>
        <p>{descr}</p>
      </>
    );
  }
}

export default BookDetailsView;

// <h1>Это страница книг!</h1>;
// <ul>
//   {this.state.books.map(book => (
//     <li key={book.id}>
//       <Link to={`${this.props.match.url}/${book.id}`}>{book.title}</Link>
//     </li>
//   ))}
// </ul>;
