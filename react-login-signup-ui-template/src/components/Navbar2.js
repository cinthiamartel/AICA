import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom'
import {SidebarData2 } from './SidebarData2'
import './Navbar.css'
import { IconContext} from 'react-icons'
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBCardText,  MDBCardTitle } from "mdbreact";

function Navbar() {
    const[sidebar, setSidebar]= useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
           
           <div className="navbar">
               <Link to="#" className='menu-bars'>
                   <FaIcons.FaBars onClick={showSidebar}/>
               </Link>
               <Link >
               
               </Link>
               
           </div>
           <div>

           </div>
           <MDBContainer>
           <MDBRow>
  <MDBCol>
    <img src="img/logo22.jpg" className="rounded mx-auto d-block" alt="aligment" className="sie" />
  </MDBCol>
</MDBRow>
<MDBRow>
        <MDBCol>
          <MDBJumbotron>
            <MDBCardBody>
              <MDBCardTitle className="h2">
                Maestros
              </MDBCardTitle>
              <p className="blue-text my-4 font-weight-bold">
                Somo los mejores Educadores en Lenguas Extranjeras
              </p>
              <MDBCardText>
                Te damos las Gracias por ser parte de la Familia AICA, 
                Esperamos que tengas la mejor experiencia Formando nuevos Estudiantes y Recuerda
                "Enseñar es dejar una huella en la vida de una persona".
              </MDBCardText>
              <hr className="my-4" />
              <div className="pt-2">
                <MDBBtn
                  color="primary"
                  className="waves-effect"
                >
                  PERFIL <MDBIcon far icon="gem" />
                </MDBBtn>
                <MDBBtn
                  outline
                  color="primary"
                  className="waves-effect"
                >
                  CURSOS <MDBIcon icon="download" />
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
      
    </MDBContainer>
           <div >
           
           </div>

           <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
               <ul className='nav-menu-items' onClick={showSidebar}>
                   <li className="navbar-toggle">
                       <Link to="#" className='menu-bars'>
                           <AiIcons.AiOutlineClose />
                       </Link>
                   </li>
                   {SidebarData2.map((item, index) => {
                       return(
                           <li Key={index} className={item.cName} >
                               <Link to={item.path}>
                                   {item.icon}
                                   <span>{item.title}</span>
                               </Link>
                           </li>
                       )
                   })}
               </ul>
           </nav>
           </IconContext.Provider>
           
        </>
        
    );
    
}

export default Navbar
