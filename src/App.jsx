import SplitScreen from './components/SplitScreen';

const LeftSideComp = ({ title }) => {
  return <h2>{title}</h2>;
};

const RightSideComp = ({ title }) => {
  return <h2>{title}</h2>;
};

function App() {
  return (
    <SplitScreen leftWidth={1} rightWidth={3}>
      <LeftSideComp title={'Left'} />
      <RightSideComp title={'Right'} />
    </SplitScreen>
  );
}

export default App;
