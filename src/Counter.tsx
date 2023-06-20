"use client";
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from './store/slice/cartSlice';
import { RootState } from './store/store';


const CounterView=()=>{
  const dispatch=useDispatch();
  const counterValue=useSelector(
    (state:RootState)=>state.counterSlice);

  const increment=()=>{
    dispatch(counterActions.increment());
  }
  const decrement=()=>{
    dispatch(counterActions.decrement());

  }
  return (
    <div className='flex'>
      <button onClick={increment} className='py-4 px-3 rounded-md bg-green-400'>Incrment</button>
      <div className='py-5 gap-6'>Counter Value{counterValue}</div>
      <button onClick={decrement}className='py-4 px-3 rounded-md bg-red-300'>Decrment</button>
    </div>
  )
}

export default CounterView;