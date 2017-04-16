import assert from 'assert';
import Search from './search';

class MockRepo {
  find() {
    return 'wow';
  }
}

describe('Search', () => {
  describe('#withKeyword', () => {
    it('is truthy', () => {
      const actual = new Search(new MockRepo).withKeyword('ok');
      assert.ok(actual);
    });
  });
});
