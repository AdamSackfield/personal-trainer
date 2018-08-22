import React from 'react'
import { Link } from 'react-router-dom'

const Links = ({ links }) => {
  let renderLinks = links.map(link => {
    return (
      <Link key={link.name} className={link.class} to={link.url}>{link.name}</Link> // Change to Link element
    )
  })

  return renderLinks
}

export default Links