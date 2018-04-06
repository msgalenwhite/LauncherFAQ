import QuestionForm from '../../src/containers/QuestionForm';
import TextInput from '../../src/components/TextInput'

describe('QuestionForm', () => {
  /*
    1. Is there state? YES
    2. Is there fetch? NO
    3. Are there props? YES - submitNewQuestion()
    4. Are there child components? YES - TextInput

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
