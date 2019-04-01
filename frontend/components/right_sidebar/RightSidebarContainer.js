import { fetchQuestions, likeQuestion, unLikeQuestion, newQuestion } from '../../actions/question_actions';
import { connect } from 'react-redux';
import RightSideBar from './right_sidebar';

// const mapDispatchToProps = dispatch => {
//   return {
//     receiveQuestion: question => dispatch(newQuestion(question)),
//   };
// };

const mapStateToProps = state => {
  
  return ({
    questions: { questions: Object.values(state.entities.questions) }
  });
};

export default connect(mapStateToProps, null)(RightSideBar);

