import React from 'react'
import Links from './Links';

const Navbar = ({ links }) => {
  return (
    <nav>
      <ul>
        <Links links={links} />
      </ul>
    </nav>
  )
}

export default Navbar