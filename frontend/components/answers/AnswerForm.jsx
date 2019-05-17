import React from 'react';
import ReactQuill from 'react-quill'; 

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
    this.handleEditorChange = this.handleEditorChange.bind(this);


    this.state.options = [
      ['code-block', 'code', 'link', 'blockquote', 'image'],
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'header': [1, 2, 3, false] }],
    ];

  }

  handleEditorChange(value, delta, source, editor) {

    this.setState({ body: value, plain_text: editor.getText() }
    );
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
          <ReactQuill
            onChange={this.handleEditorChange}
          value={this.state.body}
          modules={{ toolbar: this.state.options }}
          // className = 'answer-form-box'
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