import React from 'react';
import QuestionItem from './QuestionItem';
import QuestionFormContainer from './QuestionFormContainer';

class QuestionShow extends React.Component {


  componentDidMount() {

    this.props.fetchQuestion(175);
    // debugger
  }

  render() {
    const { questions } = this.props;
    if (questions.length === 0 ) {
      return (<div></div>)
    }
    return(
      <div className="question-title-show">
        <span >{questions[0].body}</span>
        <span >{questions[0].username}</span>
        <span >
        {
          questions[0].answers.map (answer => (
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