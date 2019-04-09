import React from 'react';

import CommentFormContainer from "./QuestionFormContainer";



class NewCommentPage extends React.Component {


    render() {
        return (
            <div className='question-form-page-outer-page'>
                <CommentFormContainer 
                answer_id={answer.id}
                questionId={question.id}

                />
            </div>
        )
    }


}

export default NewCommentPage