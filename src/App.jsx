import SplitScreen from './components/SplitScreen';

const LeftSideComp = () => {
  return <h2>Left Side</h2>;
};

const RightSideComp = () => {
  return <h2>Right Side</h2>;
};

function App() {
  return <SplitScreen Left={LeftSideComp} Right={RightSideComp} />;
}

export default App;
