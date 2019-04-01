import React from 'react';
import QuestionItem from './QuestionItem';
import QuestionFormContainer from './QuestionFormContainer';

class QuestionIndex extends React.Component {


  componentDidMount() {
    
    this.props.fetchQuestions();
  }

  



  render() {
    const { questions } = this.props;
    
    return (
      <>
      {/* < QuestionFormContainer /> */}
      <div className='question-index-list-container'>
          <div className='question-index-box'>  </div>
        <ul className= 'question-index-list'>
      <table className="table1">
      <thead>
        <tr className="top-questions-tr" >
                  <th className="top-questions-td" colSpan="4">
        <span className='top-questions-span'>Top Questions</span>
        </th></tr>
      </thead>

      <tbody>

      {
        questions.map (question => (
          <tr key={`question_table_column${question.id}`}
          className = "table1-tr-class"
          >
          <QuestionItem
            key={`question${question.id}`}
            question={question}
            // likeQuestion={this.props.likeQuestion}
            // unLikeQuestion={this.props.unLikeQuestion}
          />
          </tr>
          )
        )
      }
        </tbody>
      </table>

      </ul>
      </div>
      </>
    )
  }
}

export default QuestionIndex;