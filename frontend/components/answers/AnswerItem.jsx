import React from 'react';
import timeago from '../../util/time_util';

class AnswerItem extends React.Component {




  render() {
    if (this.props.answer.created_at === undefined) {
      this.props.answer.username = 'You';
    }

    return (
      <>
        <td className="table1-item"><div className="votes_label"> <div className="vote_counter_number"> 0 </div> <div>votes</div></div> </td>
        <td className="table1-item"> <div className="answer_label"> <div className="answer_counter_number"> 0 </div>  <div>answers</div> </div> </td >
        <td className="table1-item"> <div className="viewes_label"> <div className="view_counter_number"> 2 </div> <div> views </div></div> </td >

      <td className= "answer-item table1-item">

        <ul className = "answer-body">{this.props.answer.body} </ul>
          <ul className="answer-username"><span className = "asked-time-ago-span">asked {timeago(this.props.answer.created_at)} ago by </span> {this.props.answer.username} </ul>



      </td>
      </>



    )
  }
}

export default AnswerItem;