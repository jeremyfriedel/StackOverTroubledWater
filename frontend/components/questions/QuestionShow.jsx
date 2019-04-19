import React from 'react';
import QuestionItem from './QuestionItem';
import timeago from '../../util/time_util';
import AnswerFormContainer from '../answers/AnswerFormContainer';
import CommentFormContainer from '../comments/CommentFormContainer';
import Sidebar from '../left_sidebar/sidebar';
import { Link } from 'react-router-dom';
import RightSidebarContainer from '../right_sidebar/RightSidebarContainer';

class QuestionShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      likeStatus: []
    };
    this.handleClick = this.handleClick.bind(this);

    this.createMarkup = this.createMarkup.bind(this);
  }

  createMarkup(html) {
    return { __html: html };
  }


  handleClick() {
    this.setState({
      likeStatus: !this.state.likeStatus
    });
    
  }

  




  componentDidMount() {
    this.initialId = this.props.questionId;
    this.props.fetchQuestion(this.props.questionId);
    window.scrollTo(0, 0);
  
    // debugger
    // debugger
  }

  componentDidUpdate() {
    if (this.props.questionId != this.initialId) {
      this.props.fetchQuestion(this.props.questionId);
      this.initialId = this.props.questionId;
    }
  }

  renderComments(answer) {
    let comments;
    if (answer.comments) {
      comments = answer.comments.map(comment => (
        <div
          key={`comment${comment.id}`}
          className = "question-show-comment-body"
        >
          <div className="question-show-comment-body-text"
            
          > 
            <div dangerouslySetInnerHTML={this.createMarkup(comment.body)}></div>
            
            <span className= "question-show-comment-author-usernamme">
              {comment.author} 
            </span>
            <span className="question-show-comment-author-usernamme-timestamp">
              &nbsp;{timeago(comment.created_at)}
              </span>
          </div> 
        </div>
      )


      )
    }

    return comments

  }




  render() {
    // debugger

    const { question } = this.props;

    if (question === undefined) {
      return (<div></div>)
    }

    const label = this.state.likeStatus ? 
       <svg aria-hidden="true" className="svg-icon m0 iconArrowUpLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 26h32L18 10z"></path></svg>
 : 
      <svg aria-hidden="true" className="svg-icon m0 iconArrowDownLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 10h32L18 26z"></path></svg>


    let answers;

    if (question.answers){
      answers = question.answers.map(answer => (
        
        <div
          key={`answer${answer.id}`}
          className='answer-div-container'
        >
          <div className='answer-body-div' dangerouslySetInnerHTML={this.createMarkup(answer.body)}></div>

          <div className='answer-body-author'>
            <div className='answer-timestamp-div'>answered {timeago(answer.created_at)} ago</div>
          <div className='answer-body-author-text'> {answer.author}
          
              
          </div>
            
          </div>
          {/* <svg aria-hidden="true" className="svg-icon m0 iconArrowUpLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 26h32L18 10z"></path></svg>
          <svg aria-hidden="true" className="svg-icon m0 iconArrowDownLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 10h32L18 26z"></path></svg> */}

            <div className = "like-button-div">
            <button className="like-button"
              onClick={this.handleClick}
            >

            {label}</button>
            </div>


          <div className='answer-comments-body'>
          {this.renderComments(answer)}
          {/* < CommentFormContainer 
          answer_id = {answer.id}
          questionId = {question.id}
          /> */}
            <Link to={{
              pathname: `/newcomment/${question.id}/${answer.id}`,
              state: {
                answer_id:  answer.id ,
                questionId:  question.id
              }
            }} className = 'add-a-comment-link'> add a comment  </Link>

          </div>

        

        </div>
      )
      )
    }

      


    
    
    
    
    
    return(
      <>
      <Sidebar />
      <div className="question-outer-container">
      <div className="question-title-show">
          <div className="question-title-span">{question.title}</div>
            <div className="question-body-span" dangerouslySetInnerHTML={this.createMarkup(question.body)}></div>
          <div className="question-author-outer-body">
          <div className="question-author-placeholder"></div>
           
          <div className="question-author-div">
              <div className="question-author-inner-div">
              <div> {timeago(question.created_at)}  </div>
          {question.username}
          
              </div>
              <div className="question-author-new-contributor"> 
                <svg aria-hidden="true" className="svg-icon iconWave" width="18" height="18" viewBox="0 0 18 18"><path d="M10.7 17c-2.3 0-3.9-2.05-5.07-3.54l-.49-.6c-.67-.8-1.59-1.63-2.4-2.36A10.91 10.91 0 0 1 1.1 8.87a.79.79 0 0 1-.09-.56c.04-.19.14-.34.27-.4.14-.07.29-.1.45-.1.35 0 .67.18.87.34l3.5 2.75c.04.03.1.03.13 0a.09.09 0 0 0 .02-.13l-.02-.02c-.57-.8-3.42-4.77-3.71-5.15-.21-.27-.3-.58-.24-.84.05-.2.2-.37.4-.48.18-.09.35-.13.52-.13.44 0 .76.28.96.51l3.6 4.42c.04.04.07.06.14.02.05-.02.06-.07.03-.12L4.41 2.96a.94.94 0 0 1-.1-.73.92.92 0 0 1 .47-.57 1.06 1.06 0 0 1 1.4.39l3.8 6.14c.03.04.07.07.14.04.04-.03.06-.07.04-.13A153.8 153.8 0 0 0 8.1 2.54c-.31-.68-.2-1.14.36-1.42.52-.27 1.14-.07 1.47.48l3.69 8.3c.01.04.05.05.1.06a.1.1 0 0 0 .09-.07l.66-2.28c.1-.3.31-.56.62-.72.3-.15.65-.18.98-.1.69.2 1.09.87.89 1.52-.1.37-.46 1.73-.99 3.43l-.1.33c-.58 1.86-1.03 3.33-3.11 4.4-.7.35-1.38.53-2.05.53zm-5.84-.17c-.2.2-1.22 0-1.96-.74s-.92-1.75-.73-1.94c.2-.2.62.61 1.36 1.35.74.75 1.52 1.14 1.33 1.33zm8.39-14.61c.2-.2 1.2 0 1.95.74.74.74.92 1.75.73 1.94-.2.2-.62-.61-1.36-1.35-.74-.75-1.52-1.14-1.32-1.33z"></path></svg>
              
                <span className = "new-contributor-text">New contributor </span>
              
              </div>
          </div>
          </div>

          <div className="question-show-answers-box">

            { answers }
        
          </div>
          <AnswerFormContainer
            questionId={this.props.questionId}
          // fetchQuestion={this.props.fetchQuestion}
          />

    </div>
          {/* <RightSidebarContainer /> */}

    </div >
    </>
    )
  }





}

export default QuestionShow;