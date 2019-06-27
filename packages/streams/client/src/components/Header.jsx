import React from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

const Header = (props) => {
  return (
    <nav className={'ui secondary pointing menu'}>
      <Link to={'/'} className={'item'}>
        Streamy
      </Link>
      <div className={'right menu'}>
        <Link to={'/'} className={'item'}>
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </nav>
  );
};

export default Header;
