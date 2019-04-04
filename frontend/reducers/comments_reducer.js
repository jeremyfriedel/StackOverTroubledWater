import { RECEIVE_COMMENTS, RECEIVE_SINGLE_COMMENT } from '../actions/comments_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMMENTS:
            const comments = {};
            // for (let index = 0; index < action.comments.length; index++) {
            //   const comment = action.comments[index];
            //   comments[index] = comment;
            // }
            action.comments.forEach(comment => {
                comments[comment.id] = comment;
            });

            return comments;
        case RECEIVE_SINGLE_COMMENT:
            return Object.assign({}, state, { [action.comment.id]: action.comment });
        default:
            return state;
    }
};
