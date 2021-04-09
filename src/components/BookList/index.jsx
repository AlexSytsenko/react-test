import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BookPreview from '../BookPreview';
import './BookList.scss';

const BookList = ({ books, match }) => {
  return (
    <ul className="BookList">
      {books.map(({ id, imgUrl, title }) => (
        <li key={id}>
          <Link to={`${match.url}/${id}`}>
            <BookPreview imgUrl={imgUrl} title={title} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(BookList);
