import { RECEIVE_ANSWER_LIKES } from '../actions/answers_actions';


export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ANSWER_LIKES:
            return Object.assign({}, state, { [action.like.id]: action.like });
        default:
            return state;

        
    }
};


