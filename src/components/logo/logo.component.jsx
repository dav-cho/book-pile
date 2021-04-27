import { Link } from 'react-router-dom';

import './logo.styles.scss';

export const BookPileLogo = ({ isMainPage }) => (
  <Link to="/" className={`${isMainPage ? 'main-page-logo' : 'nav-logo'} logo-container`}>
    <span className="logo">book.pile</span>
  </Link>
);
