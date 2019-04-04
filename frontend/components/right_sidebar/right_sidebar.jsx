import React from 'react';
import QuestionIndexContainer from '../questions/QuestionIndexContainer';
// import {icon1} from './icons';


class RightSideBar extends React.Component {

  constructor(props) {
    super(props);
    
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
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

                    <td>
                    
                      <svg aria-hidden="true" className="svg-icon iconGlobe" width="18" height="18" viewBox="0 0 18 18"><path fill={this.getRandomColor()} d="M9 1a8 8 0 1 0 0 16A8 8 0 0 0 9 1zM8 15.32a6.4 6.4 0 0 1-5.23-7.75L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.4 6.4 0 0 1 2.32 10.24z"></path></svg>
                    
                      
                                          
                                          
                    {question.title}  
                    
                    
                    </td>
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