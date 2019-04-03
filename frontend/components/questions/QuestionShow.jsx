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
      <div className="question-title-show">
        <span >{question.body}</span>
        <span >{question.username}</span>
        <span >
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
        
        </span>
    </div>
    )
  }


}

export default QuestionShow;