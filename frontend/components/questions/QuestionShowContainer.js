import QuestionShow from './QuestionShow';
import { fetchQuestion, likeQuestion, unLikeQuestion, newQuestion } from '../../actions/question_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state,ownProps) => {
  let answers = [];
  if (state.entities.questions[ownProps.match.params.questionId]) {
    answers = state.entities.questions[ownProps.match.params.questionId].answers
  }
  return {
    questionId: ownProps.match.params.questionId,
    question: state.entities.questions[ownProps.match.params.questionId],
    answers: answers
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchQuestion: (id) => dispatch(fetchQuestion(id)),
  newQuestion: (question) => dispatch(newQuestion(question))
  // likeQuestion: id => dispatch(likeQuestion(id)),
  // unLikeQuestion: id => dispatch(unLikeQuestion(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);


