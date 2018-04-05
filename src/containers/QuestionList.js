import React from 'react';
import Question from '../components/Question';

class QuestionList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedQuestion: null,
    }

    this.toggleQuestionSelect = this.toggleQuestionSelect.bind(this)
  }

  toggleQuestionSelect(id) {
    if (id === this.state.selectedQuestion) {
      this.setState({ selectedQuestion: null})
    } else {
      this.setState({ selectedQuestion: id })
    }
  }

  render() {
    let questions = this.props.questions.map(question => {
      let selected;
      if (this.state.selectedQuestion === question.id) {
        selected = true
      }

      let handleClick = () => { this.toggleQuestionSelect(question.id) }

      return(
        <Question
          key={question.id}
          question={question.question}
          answer={question.answer}
          selected={selected}
          handleClick={handleClick}
        />
      )
    })

    return(
      <div className='question-list'>
        {questions}
      </div>
    )
  }
}

export default QuestionList;
