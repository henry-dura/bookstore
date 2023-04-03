import { NavLink, Outlet } from 'react-router-dom';

const RootLayout = () => (
  <div className="root-layout">
    <header>
      <nav>
        <div className="logo">BOOKSTORE</div>
        <div className="links">
          <NavLink to="/">Book</NavLink>
          <NavLink to="categories">Categories</NavLink>
        </div>
      </nav>

    </header>
    <main>
      <Outlet />

    </main>

  </div>
);

export default RootLayout;
