import React from 'react'
import { NavLink,Routes,Route } from 'react-router-dom'
import Home from './components/Home';
import Users from './components/Users';
import Products from './components/Products';

const App = () => {
  return (
    <div className="text-white w-[100%] h-screen">
      <nav className='py-3 flex justify-center gap-8 text-xl fixed bg-zinc-800 w-full'>
        <NavLink to="/">🏠Home</NavLink>
        <NavLink to="/users">👤Users</NavLink>
        <NavLink to="products">🛒Products</NavLink>
      </nav>
      <hr className='border-zinc-700'/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<Users/>} />
        <Route path='/products' element={<Products/>}/>
    
      </Routes>
    </div>
  );
}

export default App