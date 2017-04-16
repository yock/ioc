import { Dependencies } from 'constitute';
import Repo from './repo';

@Dependencies(Repo)
export default class Search {
  constructor(repo) {
    this.repo = repo;
  }

  withKeyword(keyword) {
    return this.repo.find((record) => {
      return record.match(keyword);
    });
  }
}
