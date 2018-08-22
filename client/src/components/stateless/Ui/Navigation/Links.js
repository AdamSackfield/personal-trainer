import React from 'react'

const Links = ({ links }) => {
  let renderLinks = links.map(link => {
    return (
      <li key={link.name} className={link.class} href={link.url}>{link.name}</li> // Change to Link element
    )
  })

  return renderLinks
}

export default Links