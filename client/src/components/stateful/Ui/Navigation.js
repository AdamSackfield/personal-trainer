import React, { Component } from 'react'
import Navbar from '../../stateless/Ui/Navigation/Navbar';

const linkList = [
  { name: 'Home', url: '/', class: 'none' },
  { name: 'About', url: '/about', class: 'none' }
]

  class Navigation extends Component {
    render() {
      return (
        <div>
          <Navbar links={linkList} />
        </div>
      )
    }
  }

export default Navigation