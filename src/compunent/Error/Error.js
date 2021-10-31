import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
    return (
        <div>
            <div>
                <div className='error mb-2'></div>
                <div className="App">
                    <Link to="/home" ><Button className="btn btn-md btn-info">Back to Home</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default Error;