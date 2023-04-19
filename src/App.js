import logo from './logo.svg';
import './App.css';
import Signup from './Component/Signup';
import Login from './Component/Login';
import { Route,Routes } from 'react-router-dom';
import Header from './Component/Header';
import ProductCard from './Component/ProductCard';
 import Product from './Component/Product';
import Error from './Component/Error';
import Sidenev from './Component/Sidenev';
import Category from './Component/Category';
import Nevbar from './Component/Nevbar';




function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      {/* <Sidenev/> */}
       {/* <ProductCard/> */}
       {/* <Product/>  */}
      {/* <Login/> */}
      {/* <Signup/>  */}
      {/* <Category/> */}
      <Nevbar/>
      <Routes>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
         {/* <Route  path ="/*" element={<Error/>}></Route> */}
      </Routes>
      
    </div>
  );
}

export default App;
