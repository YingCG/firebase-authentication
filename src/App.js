import React from "react";
import './categories.styles.scss'
import {Routes, Route} from 'react-router-dom'
import Navigation from "./components/pages/navigation/Navigation";
import Home from "./components/pages/home/Home";
import SignIn from './components/pages/sign-in/SignIn'
import Shop from "./components/pages/home/Shop";

function App() {
 
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>} />
        <Route path='shop' element={<Shop/>} />
        <Route path='sign-in' element={<SignIn/>} />
      </Route>
    </Routes>
  );
}

export default App;

