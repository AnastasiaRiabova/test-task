import { Navigate, Route, Routes } from 'react-router-dom';
import '../index.css';
import { Header } from './Header';
import { Home } from '../pages/Home';
import { Catalog } from '../pages/Catalog';
import { Favorites } from '../pages/Favorites';
export const App = () => {
  return (
    <main className={''}>
      <Header />
      <div className={'container'}>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/catalog'} element={<Catalog />} />
          <Route path={'/favorites'} element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </main>
  );
};
