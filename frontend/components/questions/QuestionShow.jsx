import React from 'react';
import QuestionItem from './QuestionItem';
import QuestionFormContainer from './QuestionFormContainer';

class QuestionShow extends React.Component {


  componentDidMount() {

    this.props.fetchQuestion(this.props.questionId);
    // debugger
  }

  render() {
    const { question } = this.props;
    
    if (question === undefined ) {
      return (<div></div>)
    }
    return(
      <div className="question-outer-container">
      <div className="question-title-show">
          <div className="question-title-span">{question.title}</div>
          <div className="question-body-span">{question.body}</div>
          <div className="question-show-answers-box">
        {
          question.answers.map (answer => (
          <div 
          key = {`answer${answer.id}`}
          className = 'answer-div-container'
          >
          {answer.body} by {answer.author}
          </div>
          )
        )

        }
            <div >{question.username}</div>
        
          </div>
    </div>
    </div >
    )
  }


}

export default QuestionShow;