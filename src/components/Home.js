// import AddBook from './AddBook';
import { useState } from 'react';
import Books from './Books';

const Home = () => {
  const [books, setBooks] = useState([
    { title: 'Half of the yellow sun', author: 'Chimamanda Adichie', id: 1 },
    { title: 'There was a Country', author: 'Chinua Achebe', id: 2 },
  ]);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { title, author };
    setBooks([...books, newBook]);
    setTitle('');
    setAuthor('');
  };
  return (
    <>
      <div className="book-list">
        <Books books={books} />
      </div>
      <div className="form-content">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add Title "
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />

          <input
            type="text"
            placeholder="Add Author "
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <br />

          <button type="submit" className="add-button">ADD BOOK</button>

        </form>
      </div>
    </>
  );
};

export default Home;
