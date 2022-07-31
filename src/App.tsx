import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPages from './pages/AboutPages';
import ProductsPage from './pages/ProductsPage';
import Navigation from './components/Navigation';




function App() {
return (
  <>
  <Navigation/>
  <Routes>
    <Route path='/' element={<ProductsPage/>}/>
    <Route path='/about' element={<AboutPages/>}/>
  </Routes>
  </>
)
}

export default App;
