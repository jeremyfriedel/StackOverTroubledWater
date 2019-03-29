import React from 'react';
import QuestionItem from './QuestionItem';

class QuestionIndex extends React.Component {


  componentDidMount() {
    
    this.props.fetchQuestions();
  }



  render() {
    const { questions } = this.props;
    return (
      <div className='question-index-list-container'>
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
    )
  }
}

export default QuestionIndex;