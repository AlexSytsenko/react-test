import axios from 'axios';
import { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

import AuthorsBooks from '../components/AuthorsBooks';

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
      <>
        <h1>Это страница fвторов</h1>
        <ul>
          {this.state.authors.map(author => (
            <li key={author.id}>
              <NavLink to={`${match.url}/${author.id}`}>{author.name}</NavLink>
            </li>
          ))}
        </ul>

        <Route
          path={`${match.path}/:authorId`}
          render={props => {
            const bookId = Number(props.match.params.authorId);

            const author = this.state.authors.find(({ id }) => id === bookId);

            return author && <AuthorsBooks {...props} books={author.books} />;
          }}
        ></Route>
      </>
    );
  }
}

export default Authors;
