import React from 'react';
import ReactQuill from 'react-quill'; 


import { connect } from 'react-redux';
import { newComment } from '../../actions/comments_actions';
import { withRouter } from 'react-router-dom';


class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      body: '',
      author_id: 'author_id here'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);

    this.state.options = [
      ['code-block', 'code', 'link', 'blockquote'],
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'header': [1, 2, 3, false] }],
    ];

  }

  handleChange(field) {
    return (event) => (
      this.setState({ [field]: event.target.value })
    );
  }

  handleSubmit(event) {
    
    event.preventDefault();
    const comment = Object.assign({}, this.state, { author_id: this.props.author_id.id, answer_id: this.props.answer_id});
    // debugger
    this.props.receiveComment(comment);
    this.setState({ body: '' });
    // debugger
    this.props.fetchQuestion(this.props.questionId);
    this.props.history.push(`/questions/${this.props.questionId}`);

  }

  handleEditorChange(value, delta, source, editor) {

    this.setState({ body: value, plain_text: editor.getText() }
    );
  }



  render() {
    
    return (
      <div className = "question-form-container-div">
      <form onSubmit={this.handleSubmit}
      className="comment-form-all"
      >
          <ReactQuill
            onChange={this.handleEditorChange}
            value={this.state.body}
            modules={{ toolbar: this.state.options }}
          // className = 'comment-form-box'
          />
        {/* <input
          type='text'
          onChange={this.handleChange('author_id')}
          value={this.state.author_id}
        /> */}

        <input
          type='submit'
          value='Submit Comment'
          className = 'submit-comment-button'
        />
      </form>
      </div>
    );
  }
}

export default withRouter(CommentForm);