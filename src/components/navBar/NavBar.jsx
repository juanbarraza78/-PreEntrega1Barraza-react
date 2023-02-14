import React from 'react'
import CartWidget from './CartWidget'


const NavBar = () => {
  return (
    <div>
          <nav class="navbar navbar-expand-lg bg-secondary">
          <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto mx-5">
              <li class="nav-item">
                <a class="nav-link active fs-3 text-light" aria-current="page" href="./index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-3 text-light" href="#">Contacto</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-3 text-light" href="#">Productos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-3 text-light" href="#">Quien soy</a>
              </li>
              <li class="nav-item mx-5">
                <a class="nav-link fs-3 text-light" href="#">Iniciar secion</a>
              </li>
            </ul>
          </div>
          <div>
            <CartWidget/>
          </div>
        </div>
    </nav>
    </div>
  )
}

export default NavBar
