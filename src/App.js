import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Categories from './components/Categories';
import Home from './components/Home';

import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="categories" element={<Categories />} />
    </Route>,

  ),
);

function App() {
  return (
    <RouterProvider router={router} />

  );
}

export default App;
