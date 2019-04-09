import React from 'react';

import { connect } from 'react-redux';
import { newAnswer } from '../../actions/answers_actions';


class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      body: '',
      author_id: 'author_id here'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return (event) => (
      this.setState({ [field]: event.target.value })
    );
  }

  handleSubmit(event) {
    
    event.preventDefault();
    const answer = Object.assign({}, this.state, { author_id: this.props.author_id.id, question_id: this.props.question_id.id});
    
    this.props.receiveAnswer(answer);
    this.setState({ body: '' });
    // debugger
    // this.props.fetchQuestion(this.props.questionId);
  }

  render() {
    
    return (
      <div className = "question-form-container-div">
      <form onSubmit={this.handleSubmit}
      className="comment-form-all"

      >
          <textarea
          type='text'
          className = 'answer-form-box'
          onChange={this.handleChange('body')}
          value={this.state.body}
        />
        {/* <input
          type='text'
          onChange={this.handleChange('author_id')}
          value={this.state.author_id}
        /> */}

        <input
          type='submit'
          value='Post Your Answer'
            className='answer-form-button'
        />
      </form>
      </div>
    );
  }
}

export default AnswerForm;