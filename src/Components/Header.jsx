import React from 'react';
import '../Style/Header.css';
export function Header() {
  return (
    <header className='flex'>
     <div className='outer-heading'>
      <div className="inner-heading">
        <span> Sor3a <br /> Sor3a <br /> Sor3a <br /></span>
      </div>
      <span class="absolute left-20 top-3 flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
      </span>
      </div>
      <div className='absolute right-14 top-2 flex'><a href="#About"><div className='p-2 pl-5 pr-5 rounded-xl text-lg transition hover:text-white hover:bg-red-600 '> <span className='text-lg hover:text-white'>About</span> </div></a></div>
    </header>
  )
}
export default Header;