import React from "react";
import Home from "./components/pages/home/Home";
import './categories.styles.scss'
import Shop from "./components/pages/home/Shop";
import {Routes, Route} from 'react-router-dom'
import Navigation from "./components/pages/navigation/Navigation";


function App() {
 
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>} />
        <Route path='shop' element={<Shop/>} />
      </Route>
    </Routes>
  );
}

export default App;

