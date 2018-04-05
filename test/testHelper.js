import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

Object.assign(global, {
  mount,
  jasmineEnzyme,
  React
});

beforeEach(() => {
  jasmineEnzyme();
});

// function to require all modules for a given context
let requireAll = requireContext => {
  requireContext.keys().forEach(requireContext);
};

// require all js files except testHelper.js in the test folder
requireAll(require.context('./', true, /^((?!testHelper).)*\.jsx?$/));

// require all js files except main.js in the src folder
requireAll(require.context('../src/', true, /^((?!main).)*\.jsx?$/));

// output to the browser's console when the tests run
console.info(`TESTS RAN AT ${new Date().toLocaleTimeString()}`);


/*
1. Stateless Components:
  - Question
  - TextInput
  - App
2. State but no Fetch:
  - QuestionForm
  - QuestionList
3. Fetch:
  - LauncherList
  - LauncherShow
  - FAQContainer

- Do I test main.js?
*/
