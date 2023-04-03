import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <div className="logo">BOOKSTORE</div>
    <div className="links">
      <Link to="/">Book</Link>
      <Link to="/categories">Categories</Link>

    </div>
  </nav>
);

export default NavBar;
