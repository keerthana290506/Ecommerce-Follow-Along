

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './Component/Login';
import { Signup } from './Component/Signup';
import { Home } from './Component/Home';
import { ProductForm } from './Component/Productform';
import { Productcardseller } from './Component/productcardSeller';
import Navbar from './Component/Navbar';  // Corrected import
import { Singlecard } from './Component/Singlecard';

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
      </Routes>
    </Router>
  );
}

export default App;
