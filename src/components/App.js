import React from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route} from 'react-router-dom'

import './App.css';
import Navbar from './menu/Navbar'
import Navbar2 from './menu2/Navbar2'
//Paginas
import Home from "./pages/home"

function App() {
  return (
    <>
     <Router>
       
     <Navbar2/>

     <Switch>
     <Route path="/" exact component={Home}/>
     </Switch>
     </Router>
    </>
  );
}

export default App;

