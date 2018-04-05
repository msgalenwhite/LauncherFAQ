import LauncherShow from '../../src/components/LauncherShow'; //CHECK THIS!
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('LauncherShow', () => {
  /*
    1. Is there state? YES
    2. Is there fetch? YES
    3. Are there props? POSSIBLY - can I test props.params.id?
    4. Are there child components? NO

    Important things to test:
    1. Are the correct html tags being rendered?
    2. Do tags have the correct attributes/props?
    3. Are the correct child Components rendering?
    4. Are functions doing what we want?
  */

  //let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(
      <LauncherShow />
    )
  })

});
