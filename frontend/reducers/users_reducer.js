import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

import { RECEIVE_REVIEW, RECEIVE_BENCH } from '../actions/bench_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case "FILL IN LATER":
      // return merge({}, state, action.whatever);
      return {};
    default:
      return state;
  }
};

export default usersReducer;
