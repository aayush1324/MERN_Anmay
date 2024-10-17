import React from 'react';
import carouselImage1 from '../Assets/Images/CarouselSlider/4ch.png'; // Import the image
import carouselImage2 from '../Assets/Images/CarouselSlider/2ch.png'; // Import the image
import carouselImage3 from '../Assets/Images/CarouselSlider/3ch.png'; // Import the image

const carouselImageStyle = {
    display : 'block',
    width: '100%',
    height: '75vh', // Set height to 50vh
    objectFit: 'fill', // Adjust how the image should fit
};

function CarouselSlider(props) {
    return (
        <div>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carouselImage1} className="d-block w-100"  style={{ height: '75vh',  objectFit: 'fill' }} alt="Slide 1"/>
                    </div>
                    <div className="carousel-item">
                        <img src={carouselImage2} style={carouselImageStyle}  alt="Slide 2"/>
                    </div>
                    <div className="carousel-item">
                        <img src={carouselImage3} style={carouselImageStyle}  alt="Slide 3"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default CarouselSlider;