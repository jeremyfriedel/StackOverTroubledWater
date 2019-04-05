import React from 'react';

import { connect } from 'react-redux';
import { newQuestion } from '../../actions/question_actions';


class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      body: '',
      title: '',
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
    const question = Object.assign({}, this.state, { author_id: this.props.author_id.id});
    this.props.receiveQuestion(question);
    this.setState({ body: '', title: '' });
  }

  render() {
    
    return (
      <div className = "question-form-container-div">
      <form onSubmit={this.handleSubmit}
      className = "question-form-all"
      >
          <textarea
            className = 'question-form-title'
            onChange={this.handleChange('title')}
            value={this.state.title}
          />

        <textarea
          type='text'
          className='question-form-body'
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
          value='Submit Question'
          className = 'question-form-button'
        />
      </form>
      </div>
    );
  }
}

export default QuestionForm;