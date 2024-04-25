import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import { Home } from '../pages/Home';
import { Catalog } from '../pages/Catalog';
import { Favorites } from '../pages/Favorites';
import '../index.css';
export const App = () => {
  return (
    <main>
      <Header />
      <div className={'baseContainer'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<Home to="/" />} />
        </Routes>
      </div>
    </main>
  );
};
