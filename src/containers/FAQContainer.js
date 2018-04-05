import React, {Component} from 'react'

import QuestionList from "./QuestionList"
import QuestionForm from "./QuestionForm"

class FAQContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      questions: []
    }
    this.submitNewQuestion = this.submitNewQuestion.bind(this)
  }

  componentDidMount() {
    fetch("api/v1/questions")
      .then ( response => {
        if ( response.ok ) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`;
          let error = new Error(errorMessage);
          throw(error);
        }
      })
      .then ( response => response.json() )
      .then ( response => {
        this.setState({
          questions: response
        })
      })
      .catch ( error => console.error(`Error in fetch: ${error.message}`) );
  }

  submitNewQuestion(formPayload) {
    fetch("/api/v1/questions", {
      method: 'POST',
      body: JSON.stringify(formPayload)
    })
      .then ( response => {
        if ( response.ok ) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`;
          let error = new Error(errorMessage);
          throw(error);
        }
      })
      .then ( response => response.json() )
      .then ( response => {
        let newQuestions = this.state.questions
        newQuestions = newQuestions.concat(response)

        this.setState({
          questions: newQuestions
        })
      })
      .catch ( error => console.error(`Error in fetch: ${error.message}`) );
  }


  render() {

    return(
      <div className='page'>
        <h1>We Are Here To Help</h1>
          <QuestionList
            questions={this.state.questions}
          />
          <QuestionForm
            submitNewQuestion={this.submitNewQuestion}
          />
      </div>
    )
  }
}

export default FAQContainer
