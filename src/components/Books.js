import PropTypes from 'prop-types';

const Books = ({ books }) => (
  <>
    {books.map((book) => (
      <div className="book" key={book.id}>
        <strong>{book.title}</strong>
        <p className="book-author">
          By
          {` ${book.author}`}
        </p>
      </div>
    ))}

  </>
);

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
  })).isRequired,
};

export default Books;
