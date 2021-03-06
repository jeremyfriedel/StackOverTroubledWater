export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const RECEIVE_SINGLE_QUESTION = 'RECEIVE_SINGLE_QUESTION';
import { getQuestions, postLikeToQuestion, deleteLikeFromQuestion, postQuestion, getOneQuestion } from '../util/question_api_util';


const receiveQuestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions
});

const receiveSingleQuestion = question => ({
  type: RECEIVE_SINGLE_QUESTION,
  question
});

export const fetchQuestions = (id) => dispatch => {
  return getQuestions(id)
    .then(questions => dispatch(receiveQuestions(questions)));
};

export const fetchQuestion = (id) => dispatch => {
  return getOneQuestion(id)
    .then(questions => dispatch(receiveSingleQuestion(questions)));
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
  
  return postQuestion(question).then((question) => {
    return dispatch(receiveSingleQuestion(question));
  });
};
