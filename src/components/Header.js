import { NavLink, useLocation, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const isHomePage =
    !location.pathname.includes('catalog') &&
    !location.pathname.includes('favorites');
  return (
    <header
      className={`p-3 fixed left-0 right-0 ${
        isHomePage
          ? 'bg-[#00000082]'
          : 'border-b border-red drop-shadow-lg bg-white'
      }`}
    >
      <nav>
        <ul className={'flex items-center gap-3'}>
          <li>
            <div
              className={'p-1 border rounded-full border-red cursor-pointer'}
              onClick={() => navigate('/')}
            >
              <Icon icon={logo} fill={''} width={'40px'} height={'40px'} />
            </div>
          </li>
          {links.map(({ name, path }) => (
            <li
              key={name}
              className={`font-bold ${isHomePage ? 'text-white' : 'text-red'}`}
            >
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
