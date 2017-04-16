import Bottle from 'bottlejs';
import Search from './search';
import Repo from './repo';

const main = () => {
  const bottle = new Bottle();
  bottle.service('repo', Repo);
  bottle.service('search', Search, 'repo');
  console.log(bottle.container.search.withKeyword('test'));
};

main();
