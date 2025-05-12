import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Herder2() {
  return (
    <div>
 <header id="site-header" class="fixed-top">
        <div class="container">
            <nav class="navbar navbar-expand-lg stroke">
                <h1>
                    <a class="navbar-brand" href="index.html">
                        Foodi<span>e</span> Blog<i class="fas fa-utensils"></i>
                    </a>
                </h1>
    <a class="navbar-brand" href="#index.html">
        <img src="image-path" alt="Your logo" title="Your logo"   />
    </a> 
                <button class="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon fa icon-expand fa-bars"></span>
                    <span class="navbar-toggler-icon fa icon-close fa-times"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mx-lg-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about.html">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link dropdown-toggle d-lg-flex align-items-center" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Blog <span class="fas fa-angle-down ml-lg-1"></span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-2" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="blog.html">Grid classic with right sidebar</a>
                                <a class="dropdown-item" href="blog2.html">Grid classic with left sidebar</a>
                                <a class="dropdown-item" href="blog3.html">Standard list with right sidebar</a>
                                <a class="dropdown-item" href="blog4.html">Standard list with left sidebar</a>
                                <a class="dropdown-item" href="blog5.html">Grid classic</a>
                                <a class="dropdown-item" href="blog-single.html">Standard post with right sidebar</a>
                                <a class="dropdown-item" href="blog-single2.html">Standard post with left sidebar</a>
                                <a class="dropdown-item" href="blog-single3.html">Standard post</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link dropdown-toggle d-lg-flex align-items-center" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Pages <span class="fas fa-angle-down ml-lg-1"></span>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="menu.html">Menu</a>
                                <a class="dropdown-item" href="error.html">404 Page</a>
                                <a class="dropdown-item" href="shortcodes.html">Shortcodes</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
                <div class="search-right ml-lg-3">
                    <div class="search-container">
                        <form action="/search" method="get">
                            <input class="search expandright" id="searchright" type="search" name="q" placeholder="Search" />
                            <label class="button searchbutton" for="searchright"><i class="fas fa-search"></i></label>
                        </form>
                    </div>
                </div>
                <div class="cont-ser-position">
                    <nav class="navigation">
                        <div class="theme-switch-wrapper">
                            <label class="theme-switch" for="checkbox">
                                <input type="checkbox" id="checkbox" />
                                <div class="mode-container">
                                    <i class="gg-sun"></i>
                                    <i class="gg-moon"></i>
                                </div>
                            </label>
                        </div>
                    </nav>
                </div>
            </nav>
        </div>
    </header>

    </div>
  )
}

export default Herder2