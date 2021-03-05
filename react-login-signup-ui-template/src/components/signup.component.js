import React, { useState } from 'react';
import 'mdbreact/dist/css/mdb.css';
import Axios from 'axios';
import { MDBInputGroup, MDBInput, MDBBtn} from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';

function SignUp(){

    const [nombreCompleto, setNombreCompleto] = useState("");
    const [numeroIdentidad, setNumeroIdentidad] = useState("");
    const [fechaRegistro, setFechaRegistro] = useState({varOne:new Date()});
    const [telefono1, setTelefono1] = useState("");
    const [telefono2, setTelefono2] = useState("");
    const [direccion, setDireccion] = useState("");
    const [edad, setEdad] = useState(0);
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");

    const registrar = () =>{
        Axios.post("http://localhost:3001/", {
            nombreCompleto: nombreCompleto,
            numeroIdentidad: numeroIdentidad,
            fechaRegistro: fechaRegistro,
            telefono1: telefono1,
            telefono2: telefono2,
            direccion: direccion,
            edad: edad,
            correo: correo,
            contrasena: contrasena
        }).then(()=>{
            alert("Registrado con Exito");
        });
    }

    

    return(
        <div className="flex">
            <div className="img"></div>
            <form className="forma">
                <h3 className="sign">Registro Estudiantes</h3>

                <h5 className="llenar">Llene todos los campos</h5>

                <MDBInput label="Nombre Completo" type="text" icon="user" icon-size="sm" 
                name="nombreCompleto"
                onChange={(e) => {
                    setNombreCompleto(e.target.value);
                } }
                />
                
                <MDBInputGroup
                    inputs={
                        <>
                        <MDBInput label="Numero de Identidad" icon="id-badge" type="text" name="numeroIdentidad"
                        onChange={(e) => {
                            setNumeroIdentidad(e.target.value);
                        }}
                        />
                        <div className="ho"></div>
                        <MDBInput label="Fecha de Registro" icon="calendar" type="date" name="fechaRegistro" valueDefault
                         onChange={(e) =>{
                            setFechaRegistro(e.target.value);
                        }}
                        />
                        </>
                    }
                />
               

                <MDBInputGroup
                    inputs={
                        <>
                        <MDBInput label="Telefono#1" icon="phone" type="text" name="telefono1"
                        onChange = {(e) => {
                            setTelefono1(e.target.value);
                        }}
                        />
                        <div className="ho"></div>
                        <MDBInput label="Telefono#2" icon="phone" type="text" name="telefono2"
                        onChange = {(e) => {
                            setTelefono2(e.target.value);
                        }}
                        />
                        </>
                    }
                />
               

                <MDBInputGroup
                    inputs={
                        <>
                        <MDBInput label="Direccion" icon="city" type="text" name="direccion"
                        onChange = {(e) => {
                            setDireccion(e.target.value);
                        }}
                        />
                        <div className="ho"></div>
                        <MDBInput label="Edad" icon="user-circle" type="number" name="edad"
                        onChange = {(e) => {
                            setEdad(e.target.value);
                        }}
                        />
                        </>
                    }
                />


                <MDBInputGroup
                    inputs={
                        <>
                        <MDBInput label="Correo" icon="envelope" type="email" name="correo"
                        onChange = {(e) => {
                            setCorreo(e.target.value);
                        }}
                        />
                        <div className="ho"></div>
                        <MDBInput label="Contrasena" icon="lock" type="password" name="contrasena"
                        onChange = {(e) => {
                            setContrasena(e.target.value);
                        }}
                        />
                        </>
                    }
                />

                <a href="./Inicio"><MDBBtn gradient="purple" onClick={registrar} >Registro</MDBBtn></a>
                <p className="forgot-password text-center par">
                    ¿Ya estás registrado <a href="./sign-in">iniciar sesión?</a>
                </p>
            </form>
            </div>
    );
}

export default SignUp;

/*
<MDBInputGroup
    inputs={
        <>
        <MDBInput label="Telefono#1" icon="phone" type="text"/>
        <div className="ho"></div>
        <MDBInput label="Telefono#2" icon="phone" type="text"/>
        </>
    }
/>

<a href="./Inicio"><MDBBtn color="secondary" onClick={registrar} >Registro</MDBBtn></a>

<MDBInputGroup
    inputs={
        <>
        <MDBInput label="Correo" icon="envelope" type="email"/>
        <div className="ho"></div>
        <MDBInput label="Contraseña" icon="lock" type="password"/>
        </>
    }
/>

<MDBInput label="FechaRegistro" icon="calendar" type="date" 
                         onChange={(e) =>{
                            setFechaRegistro(e.target.value);
                        }}
                        />
 */