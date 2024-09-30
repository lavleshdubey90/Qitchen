import Image from 'next/image';
import React from 'react';
import logo from "@/public/logo.svg";
import Link from 'next/link';
import Hamburger from './Hamburger';

const Navbar: React.FC = () => {

  return (
    <nav className='absolute rounded-lg z-30 p-2 bg-black top-3 sm:top-10 left-3 sm:left-10 text-xs uppercase flex items-center gap-1 tracking-widest'>
      <Hamburger />
      <Link href={"/"}>
        <Image src={logo} width={120} height={120} alt='logo' className='w-20 sm:w-[120px] mx-2 sm:mx-4' />
      </Link>
      <Link href="/menu" className='link'>Menu</Link>
      <Link href="/about" className='link'>About</Link>
      <Link href="/reservation" className='px-2 sm:px-4 py-3 sm:py-3 text-xs sm:text-sm rounded-lg border border-theme/15 bg-muted/50 hover:bg-muted hover:border-theme/30 duration-300'>Book A Table</Link>
    </nav>
  )
}

export default Navbar;