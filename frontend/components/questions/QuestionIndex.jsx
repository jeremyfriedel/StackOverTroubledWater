import React from 'react';
import QuestionItem from './QuestionItem';
import QuestionFormContainer from './QuestionFormContainer';
import BlueSessionFormContainer from '../blue_signup/BlueSessionFormContainer';
import RightSidebarContainer from '../right_sidebar/RightSidebarContainer';
import LeftSideBar from '../left_sidebar/sidebar';

class QuestionIndex extends React.Component {


  componentDidMount() {
    
    this.props.fetchQuestions();
  }


  



  render() {
    const { questions } = this.props;
    let blueboxvar = () =>( <div></div>);
    if (!this.props.currentUser) {
      blueboxvar = () => (<div className='question-index-box'>
       
        <div className='blue-outer-container-div'>
          <div className='blue-inner-container-div-commented-out'>
            < BlueSessionFormContainer />
          </div>
        </div>
      </div>)
    }
    else {
      
      blueboxvar = () => (
        <div className='question-index-box'>
      </div>);
    }
    


    return (
      <>
        <LeftSideBar />
      <div className = "left-side-question-show">
      {/* < QuestionFormContainer /> */}
      <div className='question-index-list-container'>
            {blueboxvar()}

        <ul className= 'question-index-list'>
      <table className="table1">
      <thead>
        <tr className="top-questions-tr" >
                  <th className="top-questions-td" colSpan="3">
        <span className='top-questions-span'>Top Questions</span>
                  </th><th><a href="#/newquestion"
                  className = "ask-question-button"
                  
                  >Ask Question</a></th></tr>
      </thead>

      <tbody>

      {
        questions.slice(0).reverse().map (question => (
          <tr key={`question_table_column${question.id}`}
          className = "table1-tr-class"
          >
          <QuestionItem
            key={`question${question.id}`}
            question={question}
            answers = {question.answers}
            // likeQuestion={this.props.likeQuestion}
            // unLikeQuestion={this.props.unLikeQuestion}
          />
          </tr>
          )
        )
      }
        </tbody>

      </table>
            < QuestionFormContainer />


      </ul>
      </div>

      </div>
        <div className="right-side-question-show">
        <RightSidebarContainer />
        </div>
      </>

    )
  }
}

export default QuestionIndex;