import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './actions/counterActions';

const Counter = () => {
  const counterState = useSelector((count) => count.counterReducer);
  const dispatch = useDispatch();

  return (
    <>
      <h2>{counterState}</h2>
      <button onClick={() => dispatch(increment(5))}>Increment</button>
      <button onClick={() => dispatch(decrement(15))}>Decrement</button>
      <button onClick={() => dispatch(reset(0))}>Reset</button>
    </>
  );
};

export default Counter;
