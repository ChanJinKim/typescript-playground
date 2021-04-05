import hello from '../src/index';

describe('typescript test', () => {
  it('[Hello world!!] 가 보여야한다.', () => {
    const helloWorld = hello('world');
    expect(helloWorld).toBe('Hello world!!');
  });
});
