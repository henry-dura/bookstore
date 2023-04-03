import Books from './Books';

const Home = () => {
  const books = [
    { title: 'dtre', author: 'Achebe', key: 1 },
    { title: 'ghjl;ld', author: 'Amanda', key: 2 },
  ];
  return (
    <div className="book-list">
      <Books books={books} />
    </div>

  );
};

export default Home;
