export const RECEIVE_ANSWERS = 'RECEIVE_ANSWERS';
export const RECEIVE_SINGLE_ANSWER = 'RECEIVE_SINGLE_ANSWER';
import { getAnswers, postLikeToAnswer, deleteLikeFromAnswer, postAnswer } from '../util/answer_api_util';


const receiveAnswers = answers => ({
    type: RECEIVE_ANSWERS,
    answers
});

const receiveSingleAnswer = answer => ({
    type: RECEIVE_SINGLE_ANSWER,
    answer
});

export const fetchAnswers = () => dispatch => {
    return getAnswers()
        .then(answers => dispatch(receiveAnswers(answers)));
};

export const likeAnswer = id => dispatch => {
    return postLikeToAnswer(id)
        .then(answer => dispatch(receiveSingleAnswer(answer)));
};

export const unLikeAnswer = id => dispatch => {
    return deleteLikeFromAnswer(id)
        .then(answer => dispatch(receiveSingleAnswer(answer)));
};

export const newAnswer = answer => dispatch => {

    return postAnswer(answer).then((answer) => {
        return dispatch(receiveSingleAnswer(answer));
    });
};



// $.ajax({
//     method: 'POST',
//     url: 'api/answers',
//     data: { answer: { body: 'aa', author_id: 1, question_id: 1 } }
// })