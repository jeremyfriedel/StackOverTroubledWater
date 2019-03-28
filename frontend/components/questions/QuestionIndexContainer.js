import QuestionIndex from './QuestionIndex';
import { fetchQuestions, likeQuestion, unLikeQuestion } from '../../actions/question_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  
  return {
    questions: Object.keys(state.entities.questions).map(key => state.entities.questions[key])

  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  // likeQuestion: id => dispatch(likeQuestion(id)),
  // unLikeQuestion: id => dispatch(unLikeQuestion(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);

 