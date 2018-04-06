import LauncherList from '../../src/components/LauncherList';

describe('LauncherList', () => {
  /*
    1. Is there state? YES - launchers []
    2. Is there fetch? YES - '/api/v1/launchers'
    3. Are there props? NO
    4. Are there child components? NO

    Important things to test:
    1. Are the correct html tags being rendered?
    2. Do tags have the correct attributes/props?
    3. Are the correct child Components rendering?
    4. Are functions doing what we want?
  */

  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <LauncherList />
    )
  })

  it("correctly runs my sample test", () => {
    expect(true).toEqual(true)
  });
});
