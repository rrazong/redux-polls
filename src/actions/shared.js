import {getInitialData} from '../utils/api'
import {receivePolls} from './polls';
import {receiveUsers} from './users';
import {setAuthedUser} from './authedUser';
import {showLoading, hideLoading} from 'react-redux-loading';

const AUTHED_ID = 'sarah_edo';

export const handleInitializeData = () => {
  return (dispatch) => {
    dispatch(showLoading());
    getInitialData()
      .then(({users, polls}) => {
        dispatch(receivePolls(polls));
        dispatch(receiveUsers(users));
        dispatch(setAuthedUser(AUTHED_ID));
        dispatch(hideLoading());
      });
  }
}
