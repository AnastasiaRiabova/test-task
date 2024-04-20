import { NavLink, useLocation } from 'react-router-dom';
import { Icon } from './Icon';
import { logo } from '../assets/icons';

export const Header = () => {
  const links = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Catalog',
      path: '/catalog',
    },
    { name: 'Favorites', path: '/favorites' },
  ];
  const location = useLocation();
  const isHomePage =
    !location.pathname.includes('catalog') &&
    !location.pathname.includes('favorites');
  return (
    <header
      className={`p-5 fixed left-0 right-0 ${
        isHomePage ? 'bg-transparent' : 'bg-red'
      }`}
    >
      <nav>
        <ul className={'flex items-center gap-3'}>
          <li>
            <div className={'p-1 border rounded-full border-yellow'}>
              <Icon
                icon={logo}
                fill={'#ffc531'}
                width={'40px'}
                height={'40px'}
              />
            </div>
          </li>
          {links.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                key={name}
                className={({ isActive }) => (isActive ? 'underline' : '')}
                to={path}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
