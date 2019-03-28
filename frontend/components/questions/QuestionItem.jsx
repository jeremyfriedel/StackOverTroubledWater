import React from 'react';

class QuestionItem extends React.Component {
  render() {
    return (
      <li className = "question-tem">

        <ul className = "question-body">{this.props.question.body} </ul>
        <ul className="question-username">{this.props.question.username} </ul>




      </li>
    )
  }
}

export default QuestionItem;