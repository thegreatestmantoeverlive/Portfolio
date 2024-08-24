import React from 'react';
import {IoSparkles} from 'react-icons/io5'

const Header: React.FC = () => {
  return (
    <header className='w-full p-2 bg-base items-center justify-start'>
      <IoSparkles />

      <p>Nyaaa-tube</p>
    </header>
  );
};

export default Header;
