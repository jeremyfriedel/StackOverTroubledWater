import React from 'react';
import QuestionIndexContainer from '../questions/QuestionIndexContainer';

class RightSideBar extends React.Component {

  constructor(props) {
    super(props);
    
  }

  render() {
    
  let  questions  = this.props.questions.questions;
  
    
    return (
      
      <>
        <ul className="right-sidebar-container">
          <li className="right-sidebar-container-item">Hot Network Questions</li>
          <table className="right-sidebar-table">
            <tbody>

              {
                questions.map(question => (
                  <tr key={`question_table_column${question.id}`}
                    className="right-sidebar-table-tr-class"
                  >
                    <td>{question.body}  </td>
                  </tr>
                )
                )
              }
            </tbody>
          </table>

        </ul>
      </>
    )
  }
}

export default RightSideBar;