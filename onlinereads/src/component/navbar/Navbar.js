import React from 'react';

export default function navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top " style={{backgroundColor: 'rgba(104, 73, 49, 1)'}}>
      <div className="container">
          <a className="navbar-brand disabled text-white">
            <img src="img/lgo.png" width="65" height="35" class="d-inline-block align-text-top"></img>
            onlineReads
          </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#home">Home</a>
            </li>
            <li>
              <div class="collapse navbar-collapse" id="navbarNavPrimaryDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Genres
                    </a>
                    <ul class="dropdown-menu dropdown-menu-primary">
                      <li><a class="dropdown-item" href="#zoom">Nonfiction</a></li>
                      <li><a class="dropdown-item" href="#">Fiction</a></li>
                      <li><a class="dropdown-item" href="#">Romance</a></li>
                      <li><a class="dropdown-item" href="#">Classic</a></li>
                      <li><a class="dropdown-item" href="#">Drama</a></li>
                      <li><a class="dropdown-item" href="#">Crime</a></li>
                      <li><a class="dropdown-item" href="#">Children's</a></li>
                      <li><a class="dropdown-item" href="#">Horror</a></li>
                      <li><a class="dropdown-item" href="#">Mystery</a></li>
                      <li><a class="dropdown-item" href="#">Poetry</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#footer">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#footer">Contact</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search Book" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit" >Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}
