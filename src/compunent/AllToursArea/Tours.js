import React, { useEffect, useState } from 'react';
import Tour from '../Tour/Tour';

const Tours = () => {
    const [tourService,setTourService] = useState([]);
    useEffect(()=>{
        fetch('https://ghoulish-skeleton-88250.herokuapp.com/travelsArea')
        .then(res => res.json())
        .then(data => setTourService(data))
    },[])
    return (
        <div className="container mt-4 App">
            <h2 className="fw-bold">Our <span className="text-warning">Tourist Area</span></h2>
          <div className="row">
          {
               tourService.map(tour => <Tour key={tour._id} tour={tour}></Tour>)
           }
          </div>
        </div>
    );
};

export default Tours;