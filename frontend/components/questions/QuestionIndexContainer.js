import QuestionIndex from './QuestionIndex';
import { fetchQuestions, likeQuestion, unLikeQuestion, newQuestion } from '../../actions/question_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  
  return {
    questions: Object.keys(state.entities.questions).map(key => state.entities.questions[key]),
    currentUser: state.session.id
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  newQuestion: (question) => dispatch(newQuestion(question))
  // likeQuestion: id => dispatch(likeQuestion(id)),
  // unLikeQuestion: id => dispatch(unLikeQuestion(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);

 