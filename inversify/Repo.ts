import { injectable } from 'inversify';
import { IRepo } from './IRepo';

@injectable()
export class Repo implements IRepo {
  public find(callback: Function) {
    return 'ok';
  }
}
