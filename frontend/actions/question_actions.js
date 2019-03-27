import * as APIUtil from '../util/question_api_util';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';


export const receiveQuestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

export const receiveQuestion = ({ question }) => ({
  type: RECEIVE_QUESTION,
  question,
  reviews,
  authors,
});


export const fetchQuestions = filters => dispatch => (
  APIUtil.fetchQuestions(filters).then(questions => (
    dispatch(receiveQuestions(questions))
  ))
);

export const fetchQuestion = id => dispatch => (
  APIUtil.fetchQuestion(id).then(payload => (
    dispatch(receiveQuestion(payload))
  ))
);

export const createQuestion = question => dispatch => (
  APIUtil.createQuestion(question).then(question => (
    dispatch(receiveQuestion(question))
  ))
);
