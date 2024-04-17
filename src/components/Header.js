import { NavLink } from 'react-router-dom';
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

  return (
    <header className="p-5 fixed">
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
            <NavLink
              key={name}
              className={({ isActive }) => (isActive ? 'underline' : '')}
              to={path}
            >
              {name}
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
};
