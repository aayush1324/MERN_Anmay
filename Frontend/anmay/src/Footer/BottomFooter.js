import React from 'react';

function BottomFooter() {
    return (
        // Remove the container if you want to extend the Footer to full width.
        <div className=" my-0 ">
            <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#002D62' }}>
                <div className=" p-2">
                    <section className="">
                        <div className="row">
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h5 className="text-uppercase mb-4 font-weight-bold">ANMAY ACADEMY</h5>
                                <p>Anmay Academy is democratising education, making it accessible to all. Join the revolution, learn on India's largest learning platform.</p>
                            </div>

                            <hr className="w-100 clearfix d-md-none" />

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h5 className="text-uppercase mb-4 font-weight-bold"> Policies </h5>
                                <p><a href="#" className="text-white">Terms and Conditions</a></p>
                                <p><a href="#" className="text-white">Privacy Policy</a></p>
                                <p><a href="#" className="text-white">Refund Policy</a></p>
                                <p><a href="#" className="text-white">Takedown Policy</a></p>
                            </div>

                            <hr className="w-100 clearfix d-md-none" />

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h5 className="text-uppercase mb-4 font-weight-bold"> Informatin </h5>
                                <p><a href="#" className="text-white">About Us</a></p>
                                <p><a href="#" className="text-white">Contact Us</a></p>
                                <p><a href="#" className="text-white">Blogs</a></p>
                                <p><a href="#" className="text-white">Careers</a></p>
                            </div>

                            <hr className="w-100 clearfix d-md-none" />

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h5 className="text-uppercase mb-4 font-weight-bold">Contact</h5>
                                <p> <i className="fas fa-home mr-3"></i> Delhi, India </p>
                                <p><i className="fas fa-envelope mr-3"></i> anmay@gmail.com</p>
                                <p><i className="fas fa-phone mr-3"></i> +917877976611</p>
                                <p><i className="fas fa-print mr-3"></i> +917877976611</p>
                            </div>
                        </div>
                    </section>

                    <hr className="my-3" />

                    <section className="p-3 pt-0">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-7 col-lg-8 text-center text-md-start">
                                <div className="p-3">© 2024 Anmay Academy. All Rights Reserved </div>
                            </div>

                            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                                <a className="btn btn-outline-light btn-floating m-1 text-white" role="button">
                                    <i className="fab fa-facebook-f"></i>
                                </a>

                                <a className="btn btn-outline-light btn-floating m-1 text-white" role="button">
                                    <i className="fab fa-twitter"></i>
                                </a>

                                <a className="btn btn-outline-light btn-floating m-1 text-white" role="button">
                                    <i className="fab fa-google"></i>
                                </a>

                                <a className="btn btn-outline-light btn-floating m-1 text-white" role="button">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
        </div>
    );
}

export default BottomFooter;