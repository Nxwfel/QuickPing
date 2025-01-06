import React from 'react';
import '../Style/Header.css'
import Icon from '../Images/speed-limit.png'
export function Header() {
  return (
    <header className='flex'>
     <div className='outer-heading'><img src={Icon} className='h-12 w-12 relative mt-2 ml-4' /><div className="inner-heading"><span> Quick <br /> Fast <br /> Rapid <br /></span></div></div>
    </header>
  )
}
export default Header;