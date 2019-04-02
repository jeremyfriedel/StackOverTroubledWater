import AnswerForm from './AnswerForm';
import { newAnswer } from '../../actions/answers_actions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
        receiveAnswer: answer => dispatch(newAnswer(answer)),
    };
};

const mapStateToProps = state => {
    return ({ 
        author_id: {id: state.session.id}
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerForm);