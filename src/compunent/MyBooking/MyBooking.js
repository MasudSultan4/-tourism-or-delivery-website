
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const MyBooking = () => {
    const {user} = useAuth();
    const [bookings,setBookings] = useState([]);
    const [controller,setController] = useState(false);
    useEffect(()=>{
        fetch(`https://ghoulish-skeleton-88250.herokuapp.com/bookings/${user.email}`)
        .then(res => res.json())
        .then(data => setBookings(data))
    },[controller]) ;

    const handleDelete = (id) => {

        axios.delete(`https://ghoulish-skeleton-88250.herokuapp.com/bookings/${id}`)
            .then(res => {
            if (res) {
                const proses = window.confirm("Are you Sure To Delete Booking Tour?")
                if (proses) {
                    alert("Booking Tour Deleted Successfully");
                    setController(!controller)
                }
            }
        })
    }

    return (
        <div className="mt-4">
            <Container>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                      
                        <th>Email</th>
                        <th>Name</th>
                        <th>Tour Name</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {
                    bookings.map(booking =><tbody>
                        <tr>
                            <td>{booking.email}</td>
                            <td>{booking.userName}</td>
                            <td>{booking?.name}</td>
                            <td>{booking.date}</td>
                            <td>{booking.status}</td>
                            <td><Button variant="outline-danger"  onClick={()=>handleDelete(booking._id)}>Delete</Button></td>
                        </tr>
                        
                    </tbody>)
                }
                
            </Table>
        </Container>
        </div>
    );
};

export default MyBooking;