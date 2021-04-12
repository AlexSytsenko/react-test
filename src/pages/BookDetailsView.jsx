import axios from 'axios';
import { Component } from 'react';
import routes from '../routes';

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

  handleGoBack = () => {
    const { history, location } = this.props;

    // if (location.state && location.state.from) {
    //   return history.push(location.state.from);
    // }
    // history.push(routes.books)

    history.push(location?.state?.from || routes.books);
  };

  render() {
    const { genre, title, descr, imgUrl, author } = this.state;

    return (
      <div className="container-fluid">
        <button type="button" onClick={this.handleGoBack}>
          Вернутся назад
        </button>
        <img src={imgUrl} alt="" />
        <h2>{title}</h2>
        {author && <p>Автор: {author.name}</p>}
        <p>{genre}</p>
        <p>{descr}</p>
      </div>
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
