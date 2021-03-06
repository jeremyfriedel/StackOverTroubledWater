import AnswerIndex from './AnswerIndex';
import { fetchAnswers, createAnswerLike, unLikeAnswer, newAnswer } from '../../actions/answers_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  
  return {
    answers: Object.keys(state.entities.answers).map(key => state.entities.answers[key])

  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAnswers: () => dispatch(fetchAnswers()),
  newAnswer: (answer) => dispatch(newAnswer(answer)),
  // likeAnswer: vote => dispatch(createAnswerLike(vote)),
  // unLikeAnswer: id => dispatch(unLikeAnswer(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(AnswerIndex);

