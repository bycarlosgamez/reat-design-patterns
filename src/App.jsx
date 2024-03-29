// import SplitScreen from './components/SplitScreen';
import { authors } from './assets/data/authors';
import { books } from './assets/data/books';
import List from './components/layout/lists/List';
import NumberedList from './components/layout/lists/Numbered';
import AuthorItemsSmall from './components/layout/list-items/authors/AuthorItemsSmall';
import AuthorItemsLarge from './components/layout/list-items/authors/AuthorItemsLarge';
import BookItemsSmall from './components/layout/list-items/books/BookItemsSmall';
import BookItemsLarge from './components/layout/list-items/books/BookItemsLarge';
import Modal from './components/layout/Modal';

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
      <Modal>
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
        <List
          items={books}
          sourceName={'book'}
          ItemComponent={BookItemsSmall}
        />
        <NumberedList
          items={books}
          sourceName={'book'}
          ItemComponent={BookItemsLarge}
        />
      </Modal>
    </>
  );
}

export default App;
