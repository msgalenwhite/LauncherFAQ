import Question from '../../src/components/Question'

describe('Question', () => {

  /*
    1. Is there state? NO
    2. Is there fetch? NO
    3. Are there props? YES
  */

  let wrapper;
  let onClick; // needed because we're testing a click Event

  beforeEach(() => {
    onClick = jasmine.createSpy('onClick spy')

    wrapper = mount(
      <Question
        question='How fluffy are unicorns?'
        answer='Pretty fluffy.'
        selected={false}
        handleClick={onClick}
      />
    )
  })

  it ('it receives the correct props from its parent component', () => {
    expect(wrapper.props()).toEqual({
      question: 'How fluffy are unicorns?',
      answer: 'Pretty fluffy.',
      selected: false,
      handleClick: jasmine.any(Function)
    })
  })

  describe('it renders the correct elements', () => {
    it ('renders an h5 with text from props.question', () => {

      // 3 ways to test similar things.  Using toIncludeText is not testing for an exact match, which is helpful if the text is coming from a map/list etc which might have something unexpected between separate pieces

      expect(wrapper.find('h5')).toHaveText('How fluffy are unicorns?')
      expect(wrapper.find('h5').text()).toEqual('How fluffy are unicorns?')
      expect(wrapper.find('h5')).toIncludeText('How fluffy are ')
    })

    it ('renders two divs', () => {
      expect(wrapper.find('div').length).toEqual(2)
    })

    it ('renders an icon with attribute "aria-hidden" set to true', () => {
      expect(wrapper.find('i')).toBePresent()
      expect(wrapper.find('i')).toHaveProp('aria-hidden', 'true')
    })

    describe ('it renders differently depending on props', () => {
      describe ('if props.selected is true', () => {

        beforeEach(() => {
          wrapper.setProps({selected: true})
        })

        it ('the second div has a className of "selected-question"', () => {
          expect(wrapper.find('div').at(1)).toHaveProp('className', 'selected-question')
        })

        it ('renders a p tag with an answer', () => {
          expect(wrapper.find('p')).toBePresent()
          expect(wrapper.find('p')).toIncludeText('Pretty fluffy.')
        })

        it ('renders an minus icon with className including "green"', () => {
          expect(wrapper.find('i')).toBePresent()
          expect(wrapper.find('i')).toHaveProp('className', 'fa fa-minus-square fa-2x green')
        })
      })

      describe ('if props.selected is false', () => {
        beforeEach(() => {
          wrapper.setProps({selected: false})
        })

        it ('the second div has a className of "unselected-question"', () => {
          expect(wrapper.find('div').at(1)).toHaveProp('className', 'unselected-question')
        })

        it ('renders a p tag with no text', () => {
          expect(wrapper.find('p')).toBePresent()
          expect(wrapper.find('p')).not.toIncludeText('Pretty fluffy.')
        })

        it ('renders a plus icon with className not including "green"', () => {
          expect(wrapper.find('i')).toBePresent()
          expect(wrapper.find('i')).toHaveProp('className', 'fa fa-plus-square fa-2x')
        })
      })
    })
  })

  describe('handleClick', () => {

    it ('should trigger when the icon is clicked', () => {
      wrapper.find('i').simulate('click')

      expect(onClick).toHaveBeenCalled();
    })

    it ('should trigger when the h5 is clicked', () => {
      wrapper.find('h5').simulate('click')

      expect(onClick).toHaveBeenCalled();
    })
  })
})
