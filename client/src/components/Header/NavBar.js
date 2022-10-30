import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { MapContext } from '../../context/mapContext';
import './NavBar.css';

const NavBar = () => {
  let { pathname } = useLocation();

  const { showMap, toggleMap } = useContext(MapContext);

  // close the map if navigate to other routes
  const checkMapIsOpen = () => {
    if (showMap) toggleMap();
  };

  return (
    <div className="hotel-header__navbar">
        <Link 
          to="/description" 
          className={`hotel-header__navbar--item ${pathname === '/description' ? 'hotel-header__navbar--selected' : ''}`}
          onClick={checkMapIsOpen}
        >
          description
        </Link>
        <Link 
          to="/details" 
          className={`hotel-header__navbar--item ${pathname === '/details' ? 'hotel-header__navbar--selected' : ''}`}
          onClick={checkMapIsOpen}
        >
          details
        </Link>
        <Link 
          to="/location" 
          className={`hotel-header__navbar--item ${pathname === '/location' ? 'hotel-header__navbar--selected' : ''}`}
        >
          location
        </Link>
    </div>
  );
};

export default NavBar;