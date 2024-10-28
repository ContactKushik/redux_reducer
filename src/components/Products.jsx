import React, { useEffect } from 'react'
import { getProducts } from '../store/reducers/ProductReducer';
import { useDispatch } from 'react-redux';

const Products = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProducts());
  },[])
  
  return (
    <div className=" text-white h-screen w-[100%] p-10">
      <h1 className="text-2xl font-semibold text-zinc-300 mb-5">User list</h1>
      <ol className="list-decimal">
        {/* {products.map((item, i) => (
          <li key={i} className="mb-2 text-zinc-400">
            {item.name}
            <button onClick={() => deleteHandler(item.id)}>❌</button>
          </li>
        ))} */}
      </ol>

      
    </div>
  );
}

export default Products