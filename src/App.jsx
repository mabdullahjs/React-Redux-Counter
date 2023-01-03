import React from 'react';
import { increment , decrement } from './actions';
import { useSelector , useDispatch } from 'react-redux';

function App() {
  const changeNumber = useSelector(state => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>increment and decrement</h1>
      <button onClick={()=> dispatch(increment())}>+</button>
      <input type="number" value={changeNumber} />
      <button onClick={()=> dispatch(decrement())}>-</button>
    </div>
  )
}

export default App;
