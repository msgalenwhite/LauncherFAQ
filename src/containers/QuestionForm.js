import React, {Component} from 'react'

import TextInput from '../components/TextInput'

class QuestionForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: false,
      question: "",
      answer: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.formIsEmpty = this.formIsEmpty.bind(this)
    this.clearState = this.clearState.bind(this)
    this.questionIsAQuestion = this.questionIsAQuestion.bind(this)
  }

  handleChange(event) {
    let key = event.target.name
    let value = event.target.value

    this.setState({
      [key]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    const formPayload = {
      "question": this.state.question,
      "answer": this.state.answer
    }

    let formIsComplete = this.formIsEmpty(formPayload)
    let validQuestion = this.questionIsAQuestion(formPayload["question"])

    if (formIsComplete && validQuestion) {
      this.clearState()
      this.props.submitNewQuestion(formPayload)
    } else {
      this.setState({
        error: true
      })
    }
  }

  questionIsAQuestion(question) {
    if (question[question.length-1] === "?") {
      //alternatively: question.endsWith("?")
      return true
    }
    return false
  }

  formIsEmpty(formPayload){
    let formIsComplete = true

    Object.values(formPayload).forEach((value) => {
      if (value === "") {
        formIsComplete = false
      }
    })
    return formIsComplete
  }

  clearState() {
    this.setState({
      error: false,
      question: "",
      answer: ""
    })
  }

  render() {
    let errorMessage;
    if (this.state.error) {
      errorMessage = "Please enter a valid question and answer."
    }

    return(
      <div>
        <span className='error'>{errorMessage}</span>
        <form
          method='post'
          onSubmit={this.handleSubmit}
        >
          <TextInput
            name='question'
            onChange={this.handleChange}
            value={this.state.question}
            label="New Question:"
          />
          <TextInput
            name='answer'
            onChange={this.handleChange}
            value={this.state.answer}
            label="Answer:"
          />

          <input type='submit' value='Submit'/>
        </form>
      </div>
    )
  }
}

export default QuestionForm
