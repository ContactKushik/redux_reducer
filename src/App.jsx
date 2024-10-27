import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/reducers/counterSlice';

const App = () => {
  const {value} = useSelector((state)=>state.counter)
  console.log(value);
  const dispatch = useDispatch();
  return (
    <div className="bg-zinc-800 text-white h-screen w-[100%] p-10 text-center flex flex-col justify-center items-center">
      <div>
        <h1 className="font-semibold text-2xl mb-10">Redux Tool Kit</h1>
      </div>
      <div>
        <h2 className="text-5xl font-semibold ">Counter: {value}</h2>
        <div className="flex gap-2 mt-10">
          <button className="px-3 py-2 rounded bg-blue-500" onClick={()=>dispatch(increment())}>Increment</button>
          <button className="px-3 py-2 rounded bg-blue-500" onClick={()=>dispatch(decrement())}>Decrement</button>
          <button className="px-3 py-2 rounded bg-blue-500" onClick={()=>dispatch(incrementByAmount(5))}>Increment by 5</button>
        </div>
      </div>
    </div>
  );
}

export default App