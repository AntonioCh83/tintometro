import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './view/home';
import Tavolozza from "./view/tavolozza";
import ErrorPage from "./view/errorPage";
import Profilo from "./view/profilo";
import MioProfilo from './view/mioProfilo';
import Header from './components/header';
import Footer from './components/footer';


const Index = () => {
    
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path='/tavolozza' element={<Tavolozza/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<ErrorPage/>} />
            <Route path='/profilo' element={<Profilo/>}>
                <Route path='/profilo/mio' element={<MioProfilo/>}/>   
            </Route>
        </Routes>

      <Footer/>
    </Router>
  );
}

export default Index;
