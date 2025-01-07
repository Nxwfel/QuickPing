import React from 'react';
import '../Style/Header.css';
export function Header() {
  return (
    <header className='flex'>
     <div className='outer-heading'>
      <div className="inner-heading">
        <span> Quick <br /> Fast <br /> Rapid <br /></span>
      </div>
      <h1 className='text-3xl text-black animate-pulse ml-1 mt-2.5' >Ping </h1>
      <span class="absolute left-28 ml-3 top-3 flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
      </span>
      </div>
      <div className='absolute right-14 top-2 flex'><a href=""><div className='p-2 pl-5 pr-5 rounded-xl text-lg transition hover:text-white hover:bg-red-600 mr-6'> <span className='text-lg hover:text-white'>Login</span> </div></a><a href=""><div className='p-2 pl-5 pr-5 rounded-xl text-lg transition hover:text-white hover:bg-red-600 '> <span className='text-lg hover:text-white'>Signup</span> </div></a></div>
    </header>
  )
}
export default Header;