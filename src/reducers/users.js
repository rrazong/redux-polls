import {RECEIVE_USERS} from '../actions/users';

const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    default:
    return state;
  }
}
