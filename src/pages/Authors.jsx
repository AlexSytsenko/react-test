import axios from 'axios';
import { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

import BookList from '../components/BookList';

class Authors extends Component {
  state = {
    authors: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      'http://localhost:3004/authors?_embed=books',
    );

    this.setState({ authors: response.data });
  }

  render() {
    const { match } = this.props;

    return (
      <div className="container-fluid">
        <ul>
          {this.state.authors.map(({ id, name }) => (
            <li key={id}>
              <NavLink to={`${match.url}/${id}`}>{name}</NavLink>
            </li>
          ))}
        </ul>

        <Route
          path={`${match.path}/:authorId`}
          render={props => {
            const bookId = Number(props.match.params.authorId);

            const author = this.state.authors.find(({ id }) => id === bookId);

            return (
              author && (
                <>
                  <h2>Книги автора: {author.name}</h2>
                  <BookList {...props} books={author.books} />
                </>
              )
            );
          }}
        />
      </div>
    );
  }
}

export default Authors;
