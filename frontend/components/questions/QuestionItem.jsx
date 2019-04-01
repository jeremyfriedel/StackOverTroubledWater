import React from 'react';

class QuestionItem extends React.Component {

  timeago(date) {
    if (date === undefined) {
      this.props.question.username = 'You';
      return "0 seconds";

    }
    date = new Date(date);
    
    const seconds = Math.floor((new Date() - date) / 1000);

    const timeinyear = Math.floor(seconds / 31536000);
    
    if (timeinyear > 1) {
      return timeinyear + " years";
    }

    const timeinmonth = Math.floor(seconds / 2592000);
    if (timeinmonth > 1) {
      return timeinmonth + " months";
    }

    const timeindays = Math.floor(seconds / 86400);
    if (timeindays > 1) {
      return timeindays + " days";
    }

    const timeinhours = Math.floor(seconds / 3600);
    
    if (timeinhours > 1) {
      return timeinhours + " hours";
    }

    const timeinminutes = Math.floor(seconds / 60);
    if (timeinminutes > 1) {
      return timeinminutes + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }



  render() {
    return (
      <>
        <td className="table1-item"> <span className="vote_counter_number"> 0 </span> votes</td>
        <td className="table1-item"> <span className="answer_counter_number"> 0 </span>  answers</td>
        <td className="table1-item"> <span className="view_counter_number"> 2 </span> views</td>

      <td className= "question-item table1-item">

        <ul className = "question-body">{this.props.question.body} </ul>
        <ul className="question-username">asked {this.timeago(this.props.question.created_at)} ago by {this.props.question.username} </ul>



      </td>
      </>



    )
  }
}

export default QuestionItem;