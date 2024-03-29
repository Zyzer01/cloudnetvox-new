import Link from 'next/link';
import React, { useState } from 'react'
import '../styles/Dropdown.css';


const Drop = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const MenuItems = [
        {
          title: 'Marketing',
          path: '/marketing',
          cName: 'dropdown-link'
        },
        {
          title: 'Consulting',
          path: '/consulting',
          cName: 'dropdown-link'
        },
        {
          title: 'Design',
          path: '/design',
          cName: 'dropdown-link'
        },
        {
          title: 'Development',
          path: '/development',
          cName: 'dropdown-link'
        }
      ];
  return (
    <>
         <ul
      onClick={handleClick}
      className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
    >
      {MenuItems.map((item, index) => {
        return (
          <li key={index}>
            <Link
              className={item.cName}
             href={item.path}
              onClick={() => setClick(false)}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
    </>
  )
}

export default Drop