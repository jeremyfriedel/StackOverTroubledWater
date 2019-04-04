import React from 'react';

import { connect } from 'react-redux';
import { newComment } from '../../actions/comments_actions';


class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      body: 'Body here',
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
    const comment = Object.assign({}, this.state, { author_id: this.props.author_id.id, answer_id: this.props.answer_id});
    
    this.props.receiveComment(comment);
    this.setState({ body: '' });
    // debugger
    this.props.fetchQuestion(this.props.questionId);
  }

  render() {
    
    return (
      <div className = "question-form-container-div">
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
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
          value='Submit Comment'
        />
      </form>
      </div>
    );
  }
}

export default CommentForm;