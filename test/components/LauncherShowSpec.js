import LauncherShow from '../../src/components/LauncherShow';
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

  let wrapper;
  let sampleLauncher;

  beforeEach(() => {
    sampleLauncher = {
      'name': 'Sparkly Unicorn',
      'id': 75,
      'bio': 'Unicorns always have the best time.'
    }

    fetchMock.get('/api/v1/launcher/75', {
      status: 200,
      body: sampleLauncher
    })

    wrapper = mount(
      <LauncherShow />
    )
  })

  afterEach(fetchMock.restore)

  xit ('renders a page for an individual launcher', (done) => {
    wrapper.setProps({ props: {params: {id: 75 }}})

    setTimeout(() => {
      expect(wrapper.find('h1')).toHaveText('Sparkly Unicorn')
      expect(wrapper.find('p')).toHaveText('Unicorns always have the best time.')
      done()
    }, 0)
  })
});
