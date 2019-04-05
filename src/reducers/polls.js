import {
  ADD_POLL,
  RECEIVE_POLLS
} from '../actions/polls';

const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_POLLS:
      return {
        ...state,
        ...action.polls,
      }
    case ADD_POLL:
      const poll = action.poll;
      const pollId = poll.id;
      return {
        ...state,
        [pollId]: poll
      }
    default:
      return state;
  }
}
