import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  // Function to determine the className for each nav link
  const getNavLinkClass = (path) => {
    return currentPage === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/Home" className={getNavLinkClass('/Home')}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/About" className={getNavLinkClass('/About')}>
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Resume" className={getNavLinkClass('/Resume')}>
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Contact" className={getNavLinkClass('/Contact')}>
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Projects" className={getNavLinkClass('/Projects')}>
          Projects
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;

