import {RECEIVE_POLLS} from '../actions/polls';

const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_POLLS:
      return {
        ...state,
        ...action.polls,
      }
    default:
      return state;
  }
}
