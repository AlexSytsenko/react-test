import { Link } from 'react-router-dom';

const AuthorsBooks = ({ books }) => {
  return (
    <>
      <h1>Компонент книг автора</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AuthorsBooks;
