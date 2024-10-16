import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


function TopNavbar() {
    useEffect(() => {
        // Add hover event to open dropdown on hover
        const dropdown = document.querySelector('.dropdown');
        dropdown.addEventListener('mouseenter', () => {
          dropdown.classList.add('show');
          dropdown.querySelector('.dropdown-menu').classList.add('show');
        });
        dropdown.addEventListener('mouseleave', () => {
          dropdown.classList.remove('show');
          dropdown.querySelector('.dropdown-menu').classList.remove('show');
        });
    
        return () => {
          // Cleanup event listeners
          dropdown.removeEventListener('mouseenter', () => {});
          dropdown.removeEventListener('mouseleave', () => {});
        };
    }, []);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top bg-dark border-bottom border-body" data-bs-theme="dark" >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">ANMAY</a>
                {/* <img src="Frontend\anmay\src\logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-pills">
                        <li className="nav-item"><a className="nav-link" aria-current="page" href="#">Home</a></li>
                        
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">Papers</a>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><Link className="dropdown-item" to="/JEE">JEE</Link></li>
                                <li className="nav-item"><Link className="dropdown-item" to="/NEET">NEET</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Others</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">Calculator</a>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><Link className="dropdown-item" to="/JEE">JEE</Link></li>
                                <li className="nav-item"><Link className="dropdown-item" to="/NEET">NEET</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Others</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">Papers</a>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><Link className="dropdown-item" to="/JEE">JEE</Link></li>
                                <li className="nav-item"><Link className="dropdown-item" to="/NEET">NEET</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Others</a></li>
                            </ul>
                        </li>

                        {/* <li className="nav-item"><a className="nav-link disabled" aria-disabled="true">Disabled</a></li> */}
                    </ul>
            
            
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-primary me-5" type="submit">Search</button>
                    </form>

                    <button className="btn btn-primary me-2" type="submit">Log in</button>
                    {/* <button className="btn btn-primary" type="submit">Sign up</button> */}

                </div>
            </div>
        </nav>
    );
}

export default TopNavbar;
