import React from 'react';
import AnswerItem from './AnswerItem';
import AnswerFormContainer from './AnswerFormContainer';

class AnswerIndex extends React.Component {


  componentDidMount() {
    
    this.props.fetchAnswers();
  }

  



  render() {
    const { answers } = this.props;
    
    return (
      <>
      < AnswerFormContainer />
      <div className='answer-index-list-container'>
          <div className='answer-index-box'>  </div>
        <ul className= 'answer-index-list'>
      <table className="table1">
      <thead>
        <tr className="top-answers-tr" >
                  <th className="top-answers-td" colSpan="4">
        <span className='top-answers-span'>Top Answers</span>
        </th></tr>
      </thead>

      <tbody>

      {
        answers.map (answer => (
          <tr key={`answer_table_column${answer.id}`}
          className = "table1-tr-class"
          >
          <AnswerItem
            key={`answer${answer.id}`}
            answer={answer}
            // likeAnswer={this.props.likeAnswer}
            // unLikeAnswer={this.props.unLikeAnswer}
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

export default AnswerIndex;