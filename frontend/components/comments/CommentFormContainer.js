import CommentForm from './CommentForm';
import { newComment } from '../../actions/comments_actions';
import { fetchQuestion } from '../../actions/question_actions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
        receiveComment: comment => dispatch(newComment(comment)),
        fetchQuestion: id => dispatch(fetchQuestion(id))
    };

};

const mapStateToProps = (state, ownProps) => {
    // debugger
    return ({ 
        author_id: {id: state.session.id},
        question_id: {id: ownProps.questionId},
        // update: {update: ownProps.fetchQuestions}
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);