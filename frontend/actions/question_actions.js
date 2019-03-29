export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const RECEIVE_SINGLE_QUESTION = 'RECEIVE_SINGLE_QUESTION';
import { getQuestions, postLikeToQuestion, deleteLikeFromQuestion, postQuestion } from '../util/question_api_util';


const receiveQuestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions
});

const receiveSingleQuestion = question => ({
  type: RECEIVE_SINGLE_QUESTION,
  question
});

export const fetchQuestions = () => dispatch => {
  return getQuestions()
    .then(questions => dispatch(receiveQuestions(questions)));
};

export const likeQuestion = id => dispatch => {
  return postLikeToQuestion(id)
    .then(question => dispatch(receiveSingleQuestion(question)));
};

export const unLikeQuestion = id => dispatch => {
  return deleteLikeFromQuestion(id)
    .then(question => dispatch(receiveSingleQuestion(question)));
};

export const newQuestion = question => dispatch => {
  debugger
  return postQuestion(question).then((question) => {
    return dispatch(receiveSingleQuestion(question));
  });
};
