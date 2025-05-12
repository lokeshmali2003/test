import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">MyBrand</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mainNavbar">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Category">Category</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Newspage">Newspage</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/ShowNews">ShowNews</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Webindex">Webindex</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/test">Testing</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header