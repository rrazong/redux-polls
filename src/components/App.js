import React, { Component } from 'react'
import { connect } from 'react-redux'

import {handleInitializeData} from '../actions/shared';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitializeData())
  }
  render() {
    return (
      <div>
        <span>Hello {this.props.authedUser}</span>
      </div>
    )
  }
}

export default connect((state) => ({authedUser: state.authedUser}))(App);