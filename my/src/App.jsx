

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './Component/Login';
import { Signup } from './Component/Signup';
import { Home } from './Component/Home';
import { ProductForm } from './Component/Productform';
import { Productcardseller } from './Component/productcardSeller';
import Navbar from './Component/Navbar';  // Corrected import
import { Singlecard } from './Component/Singlecard';
import SelectAddress from './Component/page/selectaddress';

function App() {
  return (
    <Router>   
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/productform" element={<ProductForm />} />
        <Route path="/product/:id" element={Singlecard} />
        <Route path='/get-address' element={<SelectAddress/>}/>
      </Routes>
    </Router>
  );
}

export default App;
