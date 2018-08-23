import React from 'react'
import PropTypes from 'prop-types'
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

// PropType Validation
Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired
  }))
}

export default Navbar