import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Productentry from './Component/Productentry';
import Viewproduct from './Component/Viewproduct';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Productsearch from './Component/Productsearch';

function App() {
  return (
   <div>
     
     <BrowserRouter>
   <Routes>
     <Route path='/' exact element={<Productentry />} />

     
     <Route path='/search' exact element={<Productsearch/>} />
     <Route path='/viewbook' exact element={<Viewproduct/>} />

    
     </Routes>
     </BrowserRouter>
   
   </div>
  );
}

export default App;
