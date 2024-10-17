import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function TopNavbar() {
    useEffect(() => {
        // Select all dropdown elements
        const dropdowns = document.querySelectorAll('.dropdown');

        // Add hover event to each dropdown
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('mouseenter', () => {
                dropdown.classList.add('show');
                dropdown.querySelector('.dropdown-menu').classList.add('show');
            });
            dropdown.addEventListener('mouseleave', () => {
                dropdown.classList.remove('show');
                dropdown.querySelector('.dropdown-menu').classList.remove('show');
            });
        });

        return () => {
            // Cleanup event listeners
            dropdowns.forEach(dropdown => {
                dropdown.removeEventListener('mouseenter', () => {});
                dropdown.removeEventListener('mouseleave', () => {});
            });
        };
    }, []);

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/Login');
    };


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top bg-dark border-bottom border-body" data-bs-theme="dark" >
            <div className="container-fluid">
                <a className="navbar-brand" href="/Home">ANMAY</a>
                {/* <img src="Frontend\anmay\src\logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-pills">
                        <li className="nav-item"><a className="nav-link" aria-current="page" href="/Home">Home</a></li>
                        
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">Papers</a>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><Link className="dropdown-item" to="/JEE">JEE</Link></li>
                                <li className="nav-item"><Link className="dropdown-item" to="/NEET">NEET</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Others</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">Calculators</a>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><Link className="dropdown-item" to="/BasicCal">Basic Calculator</Link></li>
                                <li className="nav-item"><Link className="dropdown-item" to="/MathCal">Math Calculator</Link></li>
                                <li className="nav-item"><Link className="dropdown-item" to="/PhysicsCal">Physics Calculator</Link></li>
                                <li className="nav-item"><Link className="dropdown-item" to="/ChemistryCal">Chemistry Calculator</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Others</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">Materials</a>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><Link className="dropdown-item" to="/Class1-10">Class-1</Link></li>
                                <li className="nav-item"><Link className="dropdown-item" to="/Class11-12">Class-11</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Others</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">Courses</a>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><Link className="dropdown-item" to="/CBSE">Class-1</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Others</a></li>
                            </ul>
                        </li>

                        
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">Admin</a>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><Link className="dropdown-item" to="/Material">Material</Link></li>
                                <li className="nav-item"><Link className="dropdown-item" to="/Paper">Paper</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Others</a></li>
                            </ul>
                        </li>
                    </ul>
            
            
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-primary me-5" type="submit">Search</button>
                    </form>

                    <button className="btn btn-primary me-2" type="submit" onClick={handleLogin}>Log in</button>
                    {/* <button className="btn btn-primary" type="submit">Sign up</button> */}

                </div>
            </div>
        </nav>
    );
}

export default TopNavbar;
