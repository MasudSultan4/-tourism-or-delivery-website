import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <Container className="About">
            <h2 className="fw-bold mt-5">About <span className="text-warning">TOUR GURU</span></h2>
            <div className="row">
                <div className="col-md-6 col-12">
                    <img src="https://i.ibb.co/n1rSP3x/about.jpg"
                        alt="" className="img-fluid w-100" />
                </div>

                <div className="col-md-6 col-12">

                    <p className="fw-light mt-5">

                        Tourism Management System is an integrated software developed for tourism business. It is a dynamic and responsive system and it addresses the challenges of managing the records, missing records due to human errors, etc. The purpose is to build a system that performs all operations related to traveling, booking, sightseeing, etc. This system connects customers and agents directly, provides a feedback mechanism for tourists, maintains and controls the database of tourists’ information, and gives a variety of travel services. We have used Amazon Relational Database Service (Amazon RDS) provided by Amazon Web Services.
                        Travel agencies can provide outdoor recreation activities, airlines, car rentals, cruise lines, hotels, railways, travel insurance, package tours, insurance, guide books, VIP airport lounge access, arranging logistics for luggage and medical items delivery for travellers upon request, public transport timetables, car rentals, and bureau de change services.
                    </p>

                </div>


            </div>
        </Container>
    );
};

export default About;