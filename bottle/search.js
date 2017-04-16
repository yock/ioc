import Repo from './repo';

export default class Search {
  static constitute() {
    return [Repo];
  }

  constructor(repo) {
    this.repo = repo;
  }

  withKeyword(keyword) {
    return this.repo.find((record) => {
      return record.match(keyword);
    });
  }
}
