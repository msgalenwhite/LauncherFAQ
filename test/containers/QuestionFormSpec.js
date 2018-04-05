import QuestionForm from '../../src/containers/QuestionForm';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('QuestionForm', () => {
  /*
    1. Is there state?
    2. Is there fetch?
    3. Are there props?
    4. Are there child components?

    Important things to test:
    1. Are the correct html tags being rendered?
    2. Do tags have the correct attributes/props?
    3. Are the correct child Components rendering?
    4. Are functions doing what we want?
  */

  //let wrapper;

  //beforeEach(() => {
  //  jasmineEnzyme();
  //  wrapper = mount(
  //    <QuestionForm />
  //  )
  //})

  it("correctly runs my sample test", () => {
    expect(true).toEqual(true)
  });
});
