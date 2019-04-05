import {savePoll} from '../utils/api';
import {showLoading, hideLoading} from 'react-redux-loading';

export const RECEIVE_POLLS = 'RECEIVE_POLLS';
export const ADD_POLL = 'ADD_POLL';

export const receivePolls = (polls) => ({
  type: RECEIVE_POLLS,
  polls,
});

export const handleAddPoll = (poll) => {
  return (dispatch, getState) => {
    const {authedUser} = getState();
    dispatch(showLoading());
    return savePoll({
      ...poll,
      author: authedUser,
    })
      .then((savedPoll) => {
        dispatch(addPoll(savedPoll));
      })
      .then(() => {
        dispatch(hideLoading());
 ;     })
  };
};

const addPoll = (poll) => ({
  type: ADD_POLL,
  poll,
})
