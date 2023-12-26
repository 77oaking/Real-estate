import React from 'react';

import { Link } from 'react-router-dom'

import Logo from '../assets/img/logo.svg'

const Header = () => {
  return <Header className='py-6 mb-12 border-b'>
    <div className="container mx-auto flex justify-between items-center">{/* //eta shortcut hoilo .container.mx-auto eivabe  */}
      <Link to='/'><img src={Logo} alt="" /></Link>
    </div>
    <div className='flex items-center gap-6'>
      <Link className='hover:text-violet-900 transition' to=''>Log In</Link>
      <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition' to=''>Log In</Link>
    </div>
  </Header>
};

export default Header;
