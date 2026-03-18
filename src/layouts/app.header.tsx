import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <div className='appHeader'>
      <Link to={'/'}>
        <h3>HOME</h3>
      </Link>
    </div>
  );
};
