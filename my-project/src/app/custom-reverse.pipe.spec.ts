import { CustomReversePipe } from './custom-reverse.pipe';

describe('CustomReversePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomReversePipe();
    expect(pipe).toBeTruthy();
  });
});
