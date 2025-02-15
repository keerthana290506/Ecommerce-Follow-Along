import './App.css';
import {Navbar} from './Component/Navbar'
import { Route, Routes ,Router } from 'react-router-dom';
import { Login } from './Component/Login';
import { Signup } from './Component/Signup';
import { Home } from './Component/Home';
import { ProductForm } from './Component/Productform';
import { Productcardseller } from './Component/productcardSeller';



function App() {
  return (
    <>
  
    <Router>
      <Navbar/>
    
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/productform' element={<ProductForm/>}/>
        <Route path='/my-product' element={<Productcardseller/>}/>
             </Routes>
       
        </Router>
     
             
    </>
  );  
}

export default App;

