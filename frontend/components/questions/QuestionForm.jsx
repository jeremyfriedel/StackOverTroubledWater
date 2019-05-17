import React from 'react';
import ReactQuill from 'react-quill'; 

import { withRouter } from 'react-router-dom';

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
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.state.options = [
      ['code-block', 'code', 'link', 'blockquote', 'image'],
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'header': [1, 2, 3, false] }],
    ];
  }

  handleChange(field) {
    
    return (event) => (
      this.setState({ [field]: event.target.value })
    );
  }

  handleEditorChange(value, delta, source, editor) {
    
    this.setState({ body: value, plain_text: editor.getText() }
    );
  }


  handleSubmit(event) {
    
    event.preventDefault();
    

    const question = Object.assign({}, this.state, { author_id: this.props.author_id.id});
    this.props.receiveQuestion(question);
    this.setState({ body: '', title: '' });
    this.props.history.push('/');

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
            {/* className='question-form-body' */}


          <ReactQuill
            onChange={this.handleEditorChange}
            value={this.state.body}
            modules={{ toolbar: this.state.options }}
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

export default withRouter(QuestionForm);
