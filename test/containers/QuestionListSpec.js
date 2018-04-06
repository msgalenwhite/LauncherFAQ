import QuestionList from '../../src/containers/QuestionList';
import Question from '../../src/components/Question'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('QuestionList', () => {
  /*
    1. Is there state? YES
    2. Is there fetch? NO
    3. Are there props? YES - 'questions'
    4. Are there child components? YES - Question

    Important things to test:
    1. Are the correct html tags being rendered?
    2. Do tags have the correct attributes/props?
    3. Are the correct child Components rendering?
    4. Are functions doing what we want?
  */

  let wrapper;
  let clickSpy;

  const questions = [{
    'id': 75,
    'question': 'Are unicorns fluffy?',
    'answer': 'No.'
  }]

  beforeEach(() => {
    spyOn(QuestionList.prototype, 'toggleQuestionSelect').and.callThrough()

    wrapper = mount(
      <QuestionList
        questions={questions}
      />
    )
  })

  it ('receives questions from props', () => {
    expect(wrapper).toHaveProp('questions', questions)
  })

  it ('initially renders with selectedQuestion being null', () => {
    expect(wrapper).toHaveState('selectedQuestion', null)
  })

  it ('renders the correct components', () => {
    expect(wrapper.find('div').at(0)).toHaveProp('className', 'question-list')

    let child = wrapper.find(Question)
    expect(child).toBePresent()
    expect(child.length).toEqual(1)
    expect(child.props()).toEqual({
      question: 'Are unicorns fluffy?',
      answer: 'No.',
      selected: undefined,
      handleClick: jasmine.any(Function)
    })
  })

  describe ("toggleQuestionSelect", () => {

    it ('should be triggered when a child component is clicked', () => {
      wrapper.find(Question).props().handleClick()

      expect(QuestionList.prototype.toggleQuestionSelect).toHaveBeenCalled()
    })
    it ('when a child component is clicked, it updates state with its id', () => {
      let child = wrapper.find(Question)
      child.find('i').simulate('click')
      expect(wrapper).toHaveState('selectedQuestion', 75)
    })

  })
});
