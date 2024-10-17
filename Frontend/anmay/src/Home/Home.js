import React from 'react';
import CarouselSlider from './CarouselSlider';
import AccordionFAQ from './AccordionFAQ';

function Home(props) {
    return (
        <div>
            <CarouselSlider/>
            <br />
            <hr />
            <AccordionFAQ/>
            <hr />
        </div>
    );
}

export default Home;