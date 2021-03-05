import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
//import '../nodejs/node_modules/mysql';

/*import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";*/

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import LandingPage from "./components/landingpage.component";

import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Team from './components/team';
import Contact from './components/contact';
import Inicio from './components/inicio.component';
import Alumno from './components/alumno.componrt';
import Maestro from './components/maestro';
import Prueba from './components/prueba';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Registro from './components/pruebaRegistro';

function App() {
  return (
  


    
  <Router>
    <div className="App" >
      <div className="auth-wrapper">
        <div className="auth-inner">
        
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/Navigation" component ={Navigation} />
            <Route path="/Team" component ={Team} />
            <Route path="/About" component ={About} />
            <Route path="/Header" component ={Header} />
            <Route path="/Features" component ={Features} />
            <Route path="/Services" component ={Services} />
            <Route path="/Gallery" component ={Gallery} />
            <Route path="/Testimonials" component ={Testimonials} />
            <Route path="/Contact" component ={Contact} />
            <Route path="/Inicio" component = {Inicio} />
            <Route path="/Alumno" component = {Alumno} />
            
            <Route path="/Maestro" component = {Maestro} />
            <Route path="/Prueba" component = {Prueba} />
            <Route path="/Navbar" component = {Navbar} />
            <Route path="/Navbar2" component = {Navbar2} />
            <Route path="/Registro" component = {Registro} />
            
            
            
          </Switch>
    
        </div>
      </div>
    </div></Router>
  /*  <>
    <Router>
         <Navbar />
          <Switch>
          <Route path="/Navbar" component = {Navbar} />
          </Switch>
    </Router>
    </>*/
  );
}

export default App;

/*<nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
</nav>*/

/*
function App() {
  return (<Router>
    <div className="App" >
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}
export default App;
*/