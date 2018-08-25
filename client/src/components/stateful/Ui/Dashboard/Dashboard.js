import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from '../../../stateless/Ui/User/Dashboard/Profile'

  class Dashboard extends Component {
    render() {
      return this.props.User ? <Profile user={this.props.User} /> : <p>Loading...</p>
    }

  }
  
  const mapStateToProps = (state) => {
    return { User: state.User.user }
  }

export default connect(mapStateToProps, null)(Dashboard)