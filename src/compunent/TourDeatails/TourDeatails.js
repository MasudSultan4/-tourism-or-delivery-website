import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const TourDeatails = () => {
    const { tourId } = useParams();
    const { user } = useAuth();
    const [tour, setTour] = useState({});
    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        fetch(`https://ghoulish-skeleton-88250.herokuapp.com/travelsArea/${tourId}`)
            .then((res) => res.json())
            .then((data) => setTour(data));
    }, []);

    // ref tour 
    const nameRef = useRef();
    const emailRef = useRef();
    const priceRef = useRef();
    // const tour_nameRef = useRef();

    const onSubmit = data => {


        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const price = priceRef.current.value;
        // const tour_name = tour_nameRef.current.value

        const dataRef = { ...data, name, email, price }

        console.log("data here", dataRef)
        dataRef.status = "pending"
        /* axios.post('https://ghoulish-skeleton-88250.herokuapp.com/travelsArea',data)
        .then(res => {
            if(res.data.insertedId){
                alert('Added Your Tour Area')
                reset()
            }
        }) */
    }
    return (
        <div>
            <Container className="About">
                <h2 className="fw-bold mt-5">About <span className="text-warning">TOUR GURU</span></h2>
                <div className="row">
                    <div className="col-md-6 col-12">
                        <img src={tour.img}
                            alt="" className="img-fluid me-5 w-100" />
                     </div>
                        <div className="fw-light mt-5 col-12 col-md-6">

                            <h3>{tour.name}</h3>
                            <h4>{tour.price}</h4>
                            <p>{tour.description}</p>
                        </div>
                   

                </div>
            </Container>

            <div className="container mt-4">

        <h2>Book a seat to <span className="text-warning">{tour.name}</span></h2>
                <form onSubmit={handleSubmit(onSubmit)} className="row g-3" >
                    <div className="col-12">
                        <input {...register("userName")} className="form-control" defaultValue={user.displayName} required />
                    </div>
                    <div className="col-12">
                        <input {...register("email")} className="form-control" value={user.email} required ref={emailRef} />
                    </div>
                    <div className="col-md-12">
                        <input {...register("name")} className="form-control" value={tour.name} required ref={nameRef} />
                    </div>
                    <div className="col-12">
                        <input type="text" {...register("number")} className="form-control" placeholder="Mobile Number" required />
                    </div>
                    <div className="col-12">
                        <input type="number" {...register("price")} className="form-control" value={tour.price} required ref={priceRef} />
                    </div>
                    <div className="col-12">
                        <input type="date" {...register("date")} className="form-control" required />
                    </div>
                    <div className="col-12">
                        <input type="submit" className="btn btn-success w-100" value="Place Booking" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TourDeatails;