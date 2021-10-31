import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';



const Banner = () => {
    return (
        <div id="home" className="banner">
        <Carousel>
           <Carousel.Item>
               <img
                   className="d-block w-100"
                   src='https://i.ibb.co/jwnY2xn/longest-sea-beach-in.jpg'
                   alt="First slide"
               />
               <Carousel.Caption className="text-white">
                   <h3 className="fw-bold">Cox's Bazar</h3>
                   <h5>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. </h5>
               </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item>
               <img
                   className="d-block w-100"
                   src='https://i.ibb.co/ZfqBxWw/bandarbon.jpg'
                   alt="Second slide"
               />

               <Carousel.Caption className="text-white">
                   <h3 className="fw-bold">Bandarban</h3>
                   <h5>Bandarban, is a district in South-Eastern Bangladesh, and a part of the Chittagong Division. It is one of the three hill districts of Bangladesh and a part of the Chittagong Hill Tracts,</h5>
               </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item>
               <img
                   className="d-block w-100"
                   src='https://i.ibb.co/VCmx0Gm/pangthumai-waterfall.jpg'
                   alt="Third slide"
               />

               <Carousel.Caption className="text-white">
                   <h3 className="fw-bold">Sylhet</h3>
                   <h5>Sylhet is a city in eastern Bangladesh, on the Surma River. It’s known for its Sufi shrines, like the ornate tomb and mosque of 14th-century saint Hazrat Shah Jalal, </h5>
               </Carousel.Caption>
           </Carousel.Item>
       </Carousel>
   </div>
    );
};

export default Banner;