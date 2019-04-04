import { RECEIVE_ANSWERS, RECEIVE_SINGLE_ANSWER } from '../actions/answers_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ANSWERS:
            // this code is never reached
            const answers = {};
            // for (let index = 0; index < action.answers.length; index++) {
            //   const answer = action.answers[index];
            //   answers[index] = answer;
            // }
            action.answers.forEach(answer => {
                answers[answer.id] = answer;
            });

            return answers;
        case RECEIVE_SINGLE_ANSWER:
            return Object.assign({}, state, { [action.answer.id]: action.answer });
        default:
            return state;
    }
};
