import TextInput from '../../src/components/TextInput';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('TextInput', () => {
  /*
    1. Is there state? NO
    2. Is there fetch? NO
    3. Are there props? YES
    4. Are there child components? NO

    Important things to test:
    1. Are the correct html tags being rendered?
    2. Do tags have the correct attributes/props?
    3. Are the correct child Components rendering?
    4. Are functions doing what we want?
  */

  let wrapper;
  let onChange;

  beforeEach(() => {
    onChange = jasmine.createSpy('onChange spy')

    wrapper = mount(
      <TextInput
        name='testName'
        label='Fill in a value:'
        value='test value'
        onChange={onChange}
      />
    )
  })

  it ('should render a label with text and htmlFor from props', () => {
    expect(wrapper.find('label')).toBePresent()
    expect(wrapper.find('label')).toHaveProp('htmlFor', 'testName')
    expect(wrapper.find('label')).toHaveText('Fill in a value:')
  })

  it ('should render an input field with attributes from props', () => {
    expect(wrapper.find('input').props()).toEqual({
      name: 'testName',
      value: 'test value',
      onChange: jasmine.any(Function)
    })
  })

  xit ('input field should trigger onChange when value changes', () => {
    //how would I test an onChange listener?
  })
});
