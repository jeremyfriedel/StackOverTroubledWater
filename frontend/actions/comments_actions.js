export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_SINGLE_COMMENT = 'RECEIVE_SINGLE_COMMENT';
export const RECEIVE_COMMENT_LIKES = 'RECEIVE_COMMENT_LIKES';

import { getComments, postLikeToComment, deleteLikeFromComment, postComment } from '../util/comment_api_util';


const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
});

const receiveSingleComment = comment => ({
    type: RECEIVE_SINGLE_COMMENT,
    comment
});

export const fetchComments = () => dispatch => {
    return getComments()
        .then(comments => dispatch(receiveComments(comments)));
};

export const likeComment = id => dispatch => {
    return postLikeToComment(id)
        .then(comment => dispatch(receiveSingleComment(comment)));
};

export const unLikeComment = id => dispatch => {
    return deleteLikeFromComment(id)
        .then(comment => dispatch(receiveSingleComment(comment)));
};

export const newComment = comment => dispatch => {

    return postComment(comment).then((comment) => {
        return dispatch(receiveSingleComment(comment));
    });
};




