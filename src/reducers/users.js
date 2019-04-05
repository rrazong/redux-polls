import {RECEIVE_USERS} from '../actions/users';
import {ADD_POLL} from '../actions/polls';

const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_POLL: {
      const poll = action.poll;
      const {id: pollId, author} = poll;
      return {
        ...state,
        [author]: {
          ...state[author],
          polls: state[author].polls.concat([pollId]),
        }
      }
    }
    default:
    return state;
  }
}
