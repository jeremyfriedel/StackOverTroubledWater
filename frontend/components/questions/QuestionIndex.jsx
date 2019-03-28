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
        <ul className= 'question-index-list'>
      {
        questions.map (question => (
          <QuestionItem
            key={`question${question.id}`}
            question={question}
            // likeChirp={this.props.likeChirp}
            // unLikeChirp={this.props.unLikeChirp}
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