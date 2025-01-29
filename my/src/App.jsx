import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './Component/Login';
import { Signup } from './Component/Signup';
import { Home } from './Component/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </>
  );  
}

export default App;

