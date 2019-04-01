import QuestionForm from './QuestionForm';
import { newQuestion } from '../../actions/question_actions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
        receiveQuestion: question => dispatch(newQuestion(question)),
    };
};

const mapStateToProps = state => {
    return ({ 
        author_id: {id: state.session.id}
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);