import React, { Component } from "react";

import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import {  MDBRow, MDBCol, MDBCardBody,   MDBView, MDBMask,MDBTooltip,MDBPopoverBody,MDBPopover, MDBPopoverHeader} from "mdbreact";
import {  r } from 'mdbreact';



class cursos extends Component {

    
             

    state = {
      modal13: false
    }
    
    toggle = nr => () => {
      let modalNumber = 'modal' + nr
      this.setState({
        [modalNumber]: !this.state[modalNumber]
      });
    }
    
    


        
   

render() {
  return (
  <div>
    
    
      <MDBNavbar color="black" dark expand="md">
        <MDBNavbarBrand>
          <strong className="red-text">AICA</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/"> Inicio</MDBNavLink>
            </MDBNavItem>
            <MDBDropdown>
               
                
              </MDBDropdown>
            <MDBNavItem>
              <MDBDropdown>
              
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
             
            </MDBNavItem>

              <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Menu</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#login.component">Login </MDBDropdownItem>
                  <MDBDropdownItem href="/sign-up">Registrarse</MDBDropdownItem>
                  <MDBDropdownItem href="/event">Eventos</MDBDropdownItem>
                  <MDBDropdownItem href="/">Salir </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>         
             
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="https://www.facebook.com/academiaidiomasca">
              <MDBIcon fab icon=" " />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
              
                
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>



      <div> 
        <from>        
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold my-5">
        Te Ofrecemos Los Mejores Cursos 
      </h2>
      <p className="black-text w-responsive mx-auto mb-5">
        Nuestra Academia Lider En La Enseñanza de Idiomas 
      </p>

      <MDBRow className="black-center">
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="/img/img.cursos/alemania.jpg"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-5">    </h4>
            <p className="red-text">
              Ingresa para ver mas informacion sobre los contenidos del curso
            </p>

     <div>

     <MDBContainer>
      <MDBBtn color="black" onClick={this.toggle(13)}>
        Ver
      </MDBBtn>
      <MDBModal isOpen={this.state.modal13} toggle={this.toggle(13)}>
        <MDBModalHeader toggle={this.toggle(13)}>
          Curso de Aleman
        </MDBModalHeader>
        <MDBModalBody>   


         Elige entre cursos de alemán para principiantes o niveles avanzados. Contamos con los maestros mejor calificados que te facilitaran el aprendizaje el idioma podras tener acceso a nuestro material multimedia, videos, audios, libros de apoyo.

          
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="pink" onClick={this.toggle(13)}>
            SALIR
          </MDBBtn>
        </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
  
     </div>
    
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="img/img.cursos/francia.jpg"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-5"> </h4>
            <p className="red-text">
            Ingresa para ver mas informacion sobre los contenidos del curso
            </p>
            <div>
            <MDBContainer>
      <MDBBtn color="black" onClick={this.toggle(13)}>
        Ver
      </MDBBtn>
      <MDBModal isOpen={this.state.modal13} toggle={this.toggle(13)}>
        <MDBModalHeader toggle={this.toggle(13)}>
          Curso de Frances
        </MDBModalHeader>
        <MDBModalBody>   


         Elige entre cursos de Frances para principiantes o niveles avanzados. Contamos con los maestros mejor calificados que te facilitaran el aprendizaje el idioma podras tener acceso a nuestro material multimedia, videos,audios, libros de apoyo.

          
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="pink" onClick={this.toggle(13)}>
            SALIR
          </MDBBtn>
        </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
  
     </div>

            
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="img/img.cursos/italia.jpg"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-5"> </h4>
            <p className="red-text">
            Ingresa para ver mas informacion sobre los contenidos del curso
            </p>
                       

            <div>
            


            <MDBContainer>
      <MDBBtn color="black" onClick={this.toggle(13)}>
        Ver
      </MDBBtn>
      <MDBModal isOpen={this.state.modal13} toggle={this.toggle(13)}>
        <MDBModalHeader toggle={this.toggle(13)}>
          Curso de Italiano
        </MDBModalHeader>
        <MDBModalBody>   


         Elige entre cursos de Italiano para principiantes o niveles avanzados. Contamos con los maestros mejor calificados que te facilitaran el aprendizaje el idioma podras tener acceso a nuestro material multimedia, videos, audios, libros de apoyo.

          
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="pink" onClick={this.toggle(13)}>
            SALIR
          </MDBBtn>
        </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
             </div>          
            
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </section>


        </from >
      </div>

              
      
      <div>
      <from >
      
      <section className="text-center my-4">
      <div className="holo">    
      <h2 className="h1-responsive font-weight-bold my-3">
        
      </h2>
      
      <p className="grey-text w-responsive mx-auto mb-5">
       
      </p>
      </div>
      <MDBRow className="text-center">
        <MDBCol lg="4" md="12" className="mb-lg100 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="img/img.cursos/usa.jpg"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-5"> </h4>
            <p className="red-text">
            Ingresa para ver mas informacion sobre los contenidos del curso
            </p>
            <div>
            
            <MDBContainer>
      <MDBBtn color="black" onClick={this.toggle(13)}>
        Ver
      </MDBBtn>
      <MDBModal isOpen={this.state.modal13} toggle={this.toggle(13)}>
        <MDBModalHeader toggle={this.toggle(13)}>
          Curso de Ingles
        </MDBModalHeader>
        <MDBModalBody>   


         Elige entre cursos de Ingles para principiantes o niveles avanzados. Contamos con los maestros mejor calificados que te facilitaran el aprendizaje el idioma podras tener acceso a nuestro material multimedia, videos, audios, libros de apoyo.

          
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="pink" onClick={this.toggle(13)}>
            SALIR
          </MDBBtn>
        </MDBModalFooter>
        </MDBModal>
      </MDBContainer>


            </div>

          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="img/img.cursos/china.jpg"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-5"> </h4>
            <p className="red-text">
            Ingresa para ver mas informacion sobre los contenidos del curso
            </p>
            <div>
            

            <MDBContainer>
      <MDBBtn color="black" onClick={this.toggle(13)}>
        Ver
      </MDBBtn>
      <MDBModal isOpen={this.state.modal13} toggle={this.toggle(13)}>
        <MDBModalHeader toggle={this.toggle(13)}>
          Curso de Mandarin 
        </MDBModalHeader>
        <MDBModalBody>   


         Elige entre cursos de Mandarin para principiantes o niveles avanzados. Contamos con los maestros mejor calificados que te facilitaran el aprendizaje el idioma podras tener acceso a nuestro material multimedia, videos, audios, libros de apoyo.

          
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="pink" onClick={this.toggle(13)}>
            SALIR
          </MDBBtn>
        </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
             </div>

          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="img/img.cursos/japon.jpg"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-5"> </h4>
            <p className="red-text">
            Ingresa para ver mas informacion sobre los contenidos del curso
            </p>
            <div>
            

            <MDBContainer>
      <MDBBtn color="black" onClick={this.toggle(13)}>
        Ver
      </MDBBtn>
      <MDBModal isOpen={this.state.modal13} toggle={this.toggle(13)}>
        <MDBModalHeader toggle={this.toggle(13)}>
          Curso de Japones
        </MDBModalHeader>
        <MDBModalBody>   


         Elige entre cursos de Japones para principiantes o niveles avanzados. Contamos con los maestros mejor calificados que te facilitaran el aprendizaje el idioma podras tener acceso a nuestro material multimedia, videos,audios, libros de apoyo.

          
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="pink" onClick={this.toggle(13)}>
            SALIR
          </MDBBtn>
        </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
            
             </div>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </section>

   

      </from >
      </div>
      

 </div>
    );
  }
}
export default cursos;