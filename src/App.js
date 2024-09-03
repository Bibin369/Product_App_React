import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import DeleteProduct from './components/DeleteProduct';
import ProductHeader from './components/ProductHeader';
import SearchProduct from './components/SearchProduct';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element={<AddProduct/>}/>
      <Route path='Delete' element={<DeleteProduct/>}/>
      <Route path='Search' element={<SearchProduct/>}/>
      <Route path='View' element={<ViewAll/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
