import React from 'react';
import { Link } from 'react-router-dom';
import './style/navbar.css'

const NavBar = () => {
    return (

        <div>
            <nav class="navbar navbar-expand-lg bg-success fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" to='/'>Blog Category</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Blogs</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <Link to='/' >ALL</Link>
                                </li><li class='line'>|</li><hr />
                                <li class="nav-item">
                                    <Link to='/fullStack' >FULL STACK DEVELOPMENT</Link>
                                </li><li class='line'>|</li><hr />
                                <li class="nav-item">
                                    <Link to='/dataScience' >DATA SCIENCE</Link>
                                </li><li class='line'>|</li><hr />
                                <li class="nav-item">
                                    <Link to='/cyberSecurity' >CYBER SECURITY</Link>
                                </li><li class='line'>|</li><hr />
                                <li class="nav-item">
                                    <Link to='/career' >CAREER</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </div>




    );
};

export default NavBar;