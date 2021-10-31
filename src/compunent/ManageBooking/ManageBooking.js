import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';

const ManageBooking = () => {
    const [bookings, setBookings] = useState([]);
    const [controller,setController] = useState(false);
    useEffect(() => {
        fetch('https://ghoulish-skeleton-88250.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [controller]);

    const handleApprove = (id) => {

        let data = bookings.find(booking => booking._id == id)
        data.status = "approve"
        axios.put(`https://ghoulish-skeleton-88250.herokuapp.com/bookings/${id}`, data)
            .then(res => {
            if (res) {
                alert("Update SuccessFully");
                setController(!controller)
            }
        })
    }
    const handleDelete = (id) => {
        console.log(id);
        axios.delete(`https://ghoulish-skeleton-88250.herokuapp.com/bookings/${id}`)
            .then(res => {
            if (res) {
                const proses = window.confirm("Are you Sure To Delete Booking Tour?")
                if (proses) {
                    alert("Deleted Successfully");
                    setController(!controller)
                }
            }
        })
    }
    return (
        <Container className="mt-4 col-12">
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
                    bookings.map(booking => <tbody>
                        <tr>
                        
                            <td>{booking.email}</td>
                            <td>{booking.userName}</td>
                            <td>{booking?.name}</td>
                            <td>{booking.date}</td>
                            <td><Button variant="outline-primary" onClick={()=>handleApprove(booking._id)}>{booking.status || "Pending"}</Button></td>

                            <td><Button variant="outline-danger" onClick={()=>handleDelete(booking._id)}>Delete</Button></td>
                        </tr>

                    </tbody>)
                }

            </Table>
        </Container>
    );
};

export default ManageBooking;