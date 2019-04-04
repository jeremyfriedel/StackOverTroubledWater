import { RECEIVE_QUESTIONS, RECEIVE_SINGLE_QUESTION } from '../actions/question_actions';
import { RECEIVE_SINGLE_ANSWER} from '../actions/answers_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      const questions = {};
      // for (let index = 0; index < action.questions.length; index++) {
      //   const question = action.questions[index];
      //   questions[index] = question;
      // }
      action.questions.forEach(question => {
        questions[question.id] = question;
      });
      
      return questions;
    case RECEIVE_SINGLE_ANSWER: 
      let newState =  Object.assign({}, state);
      let answers = newState[action.answer.question_id].answers.slice(0);
      answers.push(action.answer);
      newState[action.answer.question_id].answers = answers;
      return newState;
    case RECEIVE_SINGLE_QUESTION:
      return Object.assign({}, state, { [action.question.id]: action.question });
    default:
      return state;
  }
};
