import React, {Component} from 'react'
import {connect} from 'react-redux'
import LoadingBar from 'react-redux-loading';
import Dashboard from './Dashboard';
import Leaderboard from './Leaderboard';
import AddForm from './AddForm';
import Poll from './Poll'; 

import {handleInitializeData} from '../actions/shared';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitializeData())
  }
  render() {
    return (
      <div>
        <LoadingBar/>
        {this.props.isLoading ? null :
          <Poll match={{params: {id:'xj352vofupe1dqz9emx13r'}}}/>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.authedUser === null,
  authedUser: state.authedUser,
});

export default connect(mapStateToProps)(App);