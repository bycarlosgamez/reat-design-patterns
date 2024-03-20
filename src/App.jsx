// import SplitScreen from './components/SplitScreen';
import { authors } from './assets/data/authors';
import { books } from './assets/data/books';
import List from './components/lists/List';
import NumberedList from './components/lists/Numbered';
import AuthorItemsSmall from './components/list-items/authors/AuthorItemsSmall';
import AuthorItemsLarge from './components/list-items/authors/AuthorItemsLarge';
import BookItemsSmall from './components/list-items/books/BookItemsSmall';
import BookItemsLarge from './components/list-items/books/BookItemsLarge';

const LeftSideComp = ({ title }) => {
  return <h2>{title}</h2>;
};

const RightSideComp = ({ title }) => {
  return <h2>{title}</h2>;
};

function App() {
  return (
    <>
      {/* //{' '}
      <SplitScreen leftWidth={1} rightWidth={3}>
        // <LeftSideComp title={'Left'} />
        // <RightSideComp title={'Right'} />
        //{' '}
      </SplitScreen> */}
      <List
        items={authors}
        sourceName={'author'}
        ItemComponent={AuthorItemsSmall}
      />
      <List
        items={authors}
        sourceName={'author'}
        ItemComponent={AuthorItemsLarge}
      />
      <List items={books} sourceName={'book'} ItemComponent={BookItemsSmall} />
      <NumberedList
        items={books}
        sourceName={'book'}
        ItemComponent={BookItemsLarge}
      />
    </>
  );
}

export default App;
