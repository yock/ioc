import { injectable, inject } from 'inversify';
import { TYPES } from './types';
import { ISearch } from './ISearch';
import { IRepo } from './IRepo';

@injectable()
export class Search implements ISearch {
  private repo: IRepo;
  public constructor(@inject(TYPES.IRepo) repo: IRepo) {
    this.repo = repo;
  }

  public withKeyword(keyword: string) {
    return this.repo.find((record) => {
      return record.match(keyword);
    });
  }
}
