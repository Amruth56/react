
import Counter from "./components/Counter";
import {useContext} from 'react';
import {CounterContext} from './context/CounterCoontext.jsx';


export default function App() {

  const counterState = useContext(CounterContext);
  console.log(counterState);
  return (
    <>
      <h1>Count is = {counterState.count}</h1>
      <Counter/>
    </>
  );
}
 