import React from 'react';

import QuestionFormContainer from "./QuestionFormContainer";





class NewQuestionPage extends React.Component {
    
    componentDidMount() {
        window.scrollTo(0, 0);

    }


    render() {
        return (
        <div className='question-form-page-outer-page'>
            
            <QuestionFormContainer />
            
        </div>
        )
    }


}

export default NewQuestionPage