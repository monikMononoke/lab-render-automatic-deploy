import React from 'react';
import { Link } from 'react-router-dom';

export const MainScene: React.FC = () => {
  return (
    <>
      <div className='main-links'>
        <Link to={'/members/list'}>GitHub Members</Link>
        <Link to={'/characters/list'}>Rick and Morty</Link>
      </div>
    </>
  );
};
