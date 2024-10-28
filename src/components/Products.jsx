import React, { useEffect } from 'react'
import { getProducts } from '../store/reducers/ProductReducer';
import { useDispatch, useSelector } from 'react-redux';
import { asyncgetproducts } from '../actions/ProductAction';

const Products = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    // dispatch(getProducts());
    dispatch(asyncgetproducts());
  },[])
  const {products} = useSelector((state)=>state.ProductReducer)
  return (
    <div className=" text-white h-screen w-[100%] p-10 py-20 ">
      <h1 className="text-2xl font-semibold text-zinc-300 mb-5">Product list</h1>
      <ol className="list-decimal">
        {products && products.map((item, i) => (
          <li key={i} className="mb-5 text-zinc-400 flex gap-5 items-center ">
            <div className='h-20 w-20 overflow-hidden'>
              <img src={item.image} alt="" className="object-contain " />
            </div>

            {item.title}
            <button onClick={() => deleteHandler(item.id)}>❌</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Products