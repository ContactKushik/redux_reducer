import React from 'react'
import { NavLink,Routes,Route } from 'react-router-dom'
import Home from './components/Home';
import Users from './components/Users';

const App = () => {
  return (
    <div className="text-white w-[100%] h-screen">
      <nav className='p-5 flex justify-center gap-8 text-xl'>
        <NavLink to="/">🏠Home</NavLink>
        <NavLink to="/users">👤Users</NavLink>
        <NavLink to="products">🛒Products</NavLink>
      </nav>
      <hr className='border-zinc-700'/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<Users/>} />
        
    
      </Routes>
    </div>
  );
}

export default App