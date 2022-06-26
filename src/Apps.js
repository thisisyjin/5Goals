import { RecoilRoot, atom, useRecoilState } from 'recoil';

const numState = atom({
  key: 'numState',
  default: 0,
});

const Counter = () => {
  const [number, setNumber] = useRecoilState(numState);
  return <button onClick={() => setNumber(number + 1)}>{number}</button>;
};

const Display = () => {
  const [number] = useRecoilState(numState);
  return <div>{number}</div>;
};

const App = () => {
  return (
    <RecoilRoot>
      <div>Recoil Statement</div>
      <Counter />
      <Display />
    </RecoilRoot>
  );
};

export default App;
