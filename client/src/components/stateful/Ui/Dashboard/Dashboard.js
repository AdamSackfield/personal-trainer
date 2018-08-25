import React, { Component } from 'react'
import { connect } from 'react-redux'

import DashboardComp  from '../../../stateless/Ui/User/Dashboard'

  class Dashboard extends Component {
    render() {
      return this.props.User ? <DashboardComp user={this.props.User} /> : <p>Loading...</p>
    }

  }
  
  const mapStateToProps = (state) => {
    return { User: state.User.user }
  }

export default connect(mapStateToProps, null)(Dashboard)