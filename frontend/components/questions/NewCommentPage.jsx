import React from 'react';

import CommentFormContainer from "../comments/CommentFormContainer";



class NewCommentPage extends React.Component {


    render() {
        
        if (this.props.location.state === undefined) {
            // debugger
            let regexExp = /(\d+)/g;
            let arr = (this.props.location.pathname).match(regexExp);
            
            this.props.location.state = {
                answer_id: arr[1],
            
                questionId: arr[0],
            };
            // debugger
        }

        // debugger
        return (
            
            <div className='question-form-page-outer-page'>
                <CommentFormContainer 
                    answer_id={this.props.location.state.answer_id}
                    questionId={this.props.location.state.questionId}
                />
            </div>
        )
    }


}

export default NewCommentPage