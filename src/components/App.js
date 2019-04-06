import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import LoadingBar from 'react-redux-loading';
import Dashboard from './Dashboard';
import Leaderboard from './Leaderboard';
import AddForm from './AddForm';
import Poll from './Poll'; 
import Nav from './Nav';

import {handleInitializeData} from '../actions/shared';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitializeData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar/>
          <div className='container'>
            <Nav/>
            {this.props.isLoading ? null :
              <div>
                <Route path='/' exact component={Dashboard}/>
                <Route path='/leaderboard' component={Leaderboard}/>
                <Route path='/add' component={AddForm}/>
                <Route path='/polls/:id' component={Poll}/>
              </div>
            }
          </div>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.authedUser === null,
  authedUser: state.authedUser,
});

export default connect(mapStateToProps)(App);