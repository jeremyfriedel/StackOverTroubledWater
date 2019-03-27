import * as APIUtil from '../util/question_api_util';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';


export const receiveQuestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

export const receiveBench = ({ question, reviews, authors }) => ({
  type: RECEIVE_QUESTION,
  question,
  reviews,
  authors,
});

export const createReview = review => dispatch => (
  APIUtil.createReview(review).then(review => (
    dispatch(receiveReview(review))
  ))
);

export const fetchQuestions = filters => dispatch => (
  APIUtil.fetchQuestions(filters).then(questions => (
    dispatch(receiveQuestions(questions))
  ))
);

export const fetchBench = id => dispatch => (
  APIUtil.fetchBench(id).then(payload => (
    dispatch(receiveBench(payload))
  ))
);

export const createBench = question => dispatch => (
  APIUtil.createBench(question).then(question => (
    dispatch(receiveBench(question))
  ))
);
