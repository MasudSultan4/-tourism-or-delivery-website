import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Tour from '../Tour/Tour';

const Tours = () => {
    const [tourService,setTourService] = useState([]);
    const [isLoader,setIsLoader] = useState(false);
    useEffect(()=>{
        fetch('https://ghoulish-skeleton-88250.herokuapp.com/travelsArea')
        .then(res => res.json())
        .then(data => {
            setTourService(data)
            setIsLoader(true)
        })
    },[])
    return (
        <div id="TourArea" className="container mt-4 App">
            <h2 className="fw-bold">Our <span className="text-warning">Tourist Area</span></h2>
          <div className="row">
          {
              isLoader? tourService.map(tour => <Tour key={tour._id} tour={tour}></Tour>): <Spinner className="mx-auto" animation="border" variant="danger"></Spinner>
           }
          </div>
        </div>
    );
};

export default Tours;