import React from 'react';
import QuestionItem from './QuestionItem';
import QuestionFormContainer from './QuestionFormContainer';

class QuestionIndex extends React.Component {


  componentDidMount() {
    // debugger
    this.props.fetchQuestions();
  }

  



  render() {
    const { questions } = this.props;
    
    return (
      <>
      < QuestionFormContainer />
      <div className='question-index-list-container'>s
        <div className= 'question-index-box'>   </div>
        <ul className= 'question-index-list'>
      {
        questions.map (question => (
          <QuestionItem
            key={`question${question.id}`}
            question={question}
            // likeQuestion={this.props.likeQuestion}
            // unLikeQuestion={this.props.unLikeQuestion}
          />
          )
        )
      }

      </ul>
      </div>
      </>
    )
  }
}

export default QuestionIndex;