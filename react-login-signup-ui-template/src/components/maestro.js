import React, {  useState } from "react";
import Axios from 'axios';
import {MDBBtn,MDBInput, MDBCardHeader, MDBIcon, MDBModalFooter} from "mdbreact";
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Maestro(){

  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState(""); 

  const [loginStatus, setLoginStatus] = useState("");
  

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      correo: correo,
      contrasena: contrasena
    }).then((response) => {
      if (response.data.status) {
        alert('Bienvenido')
        window.location.href="./Navbar2";}
        if (response.data.message) {
        setLoginStatus(response.data.message)
      }
      else{
        setLoginStatus(response.data[0].correo)
      }
    }
    )
  };
  
        return (
            <div className="flex alto">
                <div className="ancho">
                <div className="imgLoginM"></div>
                </div>
                <form className="formularioLogin">
                <MDBCardHeader className="form-header blue-gradient rounded">
                <h3 className="my-3">
                  <MDBIcon icon="lock" /> INICIO SESION MAESTROS
                </h3>
                </MDBCardHeader>
                    <div className="division"></div>
                    <MDBInput label="Correo" icon="envelope" type="email"
                    onChange={(e) => {
                      setCorreo(e.target.value);
                  } } />
                    <div className="division1"></div>
                    <MDBInput label="Contraseña" icon="lock" type="password"
                    onChange={(e) => {
                      setContrasena(e.target.value);
                  } }/>
                    <div className="division"></div>
                    <MDBBtn gradient="blue" onClick={login}>Iniciar Sesion</MDBBtn>
                    <div className="division"></div>
                    <h7>{loginStatus}</h7>
                    <MDBModalFooter>
                <div className="font-weight-light">
                  <p>No puedes iniciar sesion? </p>
                  <p>Olvidaste tu contraseña?</p>
                </div>
               </MDBModalFooter>
                </form>
            </div>
        );
}

export default Maestro;
