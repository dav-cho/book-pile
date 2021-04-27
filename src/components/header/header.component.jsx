import { NavLink } from 'react-router-dom';

import { Menu } from '../menu/menu.component';
import { Search } from '../search/search.component';
import { BookPileLogo } from '../logo/logo.component';
// import { ReactComponent as Logo } from '../../assets/book-pile.svg';

import './header.styles.scss';

export const Header = () => {
  return (
    <>
      <BookPileLogo />

      <div className="header">
        <div className="header-left">
          <div className="menu-button-container">
            <strong className="bullet">&bull;</strong>
            <span className="menu-button">
              <Menu />
            </span>
          </div>
          <span className="search-container">
            <Search />
          </span>
        </div>

        <ul className="nav-links">
          <NavLink to="/home">
            <li>home</li>
          </NavLink>
          <NavLink to="/about">
            <li>about</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};
