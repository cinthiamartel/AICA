import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      < header>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarExample01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <a class="nav-link" aria-current="page" href="./maestro">Maestro</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./empleado">Empleado</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./sign-in">Estudiante</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./sign-up">Registrarse</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Sobre Nosotros</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contactanos</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>


</header>
     
    );
  }
}

export default Navigation;