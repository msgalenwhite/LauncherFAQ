import Question from '../../src/components/Question'

describe('Question', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Question
        question={'What is your camp like?'}
      />
    )
  })

  //correct things are rendered
  //onClicks trigger correctly

  it('should render a Question component that has an h5 with question text', () => {
    expect(wrapper.find('h5')).toBePresent()
    expect(wrapper.find('h5').text()).toEqual('What is your camp like?')
  })

  it('should have an icon', () => {
    expect(wrapper.find('i')).toBePresent()
  })
})
