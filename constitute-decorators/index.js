import constitute from 'constitute';
import Search from './search';

const main = () => {
  const search = constitute(Search);
  console.log(search.withKeyword('test'));
};

main();
