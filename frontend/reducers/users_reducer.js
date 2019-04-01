
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case "FILL IN LATER":
      // return merge({}, state, action.whatever);
      return {};
    default:
      return state;
  }
};

export default usersReducer;
