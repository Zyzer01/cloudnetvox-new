import Link from 'next/link';
import React, { useState } from 'react';
import '../styles/Navbar.css';
import ButtonV2 from './ui/ButtonV2';
import Drop from './Drop';
import { CiMenuBurger } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";

const Nav = () => {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const onMouseEnter = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(true);
      }
    };
  
    const onMouseLeave = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(false);
      }
    };


  return (
    <>
    <nav className='navbar'>
      <Link href='/' className='navbar-logo' onClick={closeMobileMenu}>
        EPIC
        <i class='fab fa-firstdraft' />
      </Link>
      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? <LiaTimesSolid /> : <CiMenuBurger />} />
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
          <Link href='/' className='nav-links' onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li
          className='nav-item'
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link
            href='/services'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            Services <i className='fas fa-caret-down' />
          </Link>
          {dropdown && <Drop />}
        </li>
        <li className='nav-item'>
          <Link
            href='/products'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            Products
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            href='/contact-us'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            href='/sign-up'
            className='nav-links-mobile'
            onClick={closeMobileMenu}
          >
            Sign Up
          </Link>
        </li>
      </ul>
      <ButtonV2 text="New" />
    </nav>
  </>
  );
};

export default Nav;
