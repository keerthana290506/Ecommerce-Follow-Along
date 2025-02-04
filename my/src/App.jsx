import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './Component/Login';
import { Signup } from './Component/Signup';
import { Home } from './Component/Home';
import { Productform } from './Component/Productform';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/productform' element={<Productform/>}/>
      </Routes>
    </>
  );  
}

export default App;

