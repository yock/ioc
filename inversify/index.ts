import { Container } from 'inversify';
import { TYPES } from './types';
import { ISearch } from './ISearch';
import { IRepo } from './IRepo';
import { Repo } from './Repo';
import { Search } from './Search';

function main() {
  const container = new Container();
  container.bind<ISearch>(TYPES.ISearch).to(Search);
  container.bind<IRepo>(TYPES.IRepo).to(Repo);

  const search = container.get<ISearch>(TYPES.ISearch);
  console.log(search.withKeyword('test'));
}

main();
