import { NavLink } from 'react-router-dom';
import './header.styles.scss';

import { Menu } from '../menu/menu.component';
import { Search } from '../search/search.component';
// import { ReactComponent as Logo } from '../../assets/book-pile.svg';

export const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="menu-button-container">
          <strong className="bullet">&bull;</strong>
          {/* <span className="circle"></span> */}
          <span className="menu-button">
            <Menu />
          </span>
        </div>
        <span className="search-container">
          <Search />
        </span>
      </div>

      <NavLink to="/" className="logo-container">
        <span className="logo">book.pile</span>
      </NavLink>

      <ul className="nav-links">
        <NavLink to="/home">
          <li>home</li>
        </NavLink>
        <NavLink to="/about">
          <li>about</li>
        </NavLink>
      </ul>
    </div>
  );
};
