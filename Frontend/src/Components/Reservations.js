import React, { useState } from 'react';
import Navbar from "./Navbar";
import { Link, useNavigate } from 'react-router-dom';
import "./Reservations.css";
import Footer from "./Footer";
import { createreservation } from '../Services/service';
import Modal from './Modal';

function Reservations(){
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        date: '',
        time: '',
        noofpeople: 1,
        message: ''
    });
    
    const nav=useNavigate();

    const [modalShow, setModalShow] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Reservation Data:', formData);
        const response = await createreservation(formData);
        console.log(response.data);
        setModalShow(true);  // Show the modal on successful form submission
    };

    const handleCloseModal = () => {
        setModalShow(false);
        nav("/menu");
        // Reset the form or any other post-submission logic
    };
 
    return(
        <div>
        <div>
        <div className='reservecont'>
        <Navbar/>
        <div className="reservation-container">
            <h1 className="reservation-title">Reserve a Table</h1>
            <p>CALL US +91 97586 24356 OR COMPLETE THE FORM BELOW</p>
            <form className="reservation-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstname" required value={formData.firstname} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastname" required value={formData.lastname} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" name="date" required value={formData.date} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Time</label>
                    <input type="time" id="time" name="time" required value={formData.time} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="guests">Guests</label>
                    <select id="guests" name="noofpeople" required value={formData.noofpeople} onChange={handleChange}>
                        {[...Array(10)].map((_, i) => (
                            <option key={i+1} value={i+1}>{i+1}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="reservation-button">Reserve a Table</button>
            </form>
            </div>
            </div>
            </div>
            <Footer/>
        <Modal show={modalShow} handleClose={handleCloseModal} className="modal">
            <h2>Your reservation has been successfully submitted.</h2>
            <h2>Reservation Details</h2>
            <p><strong>First Name:</strong> {formData.firstname}</p>
            <p><strong>Last Name:</strong> {formData.lastname}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Date:</strong> {formData.date}</p>
            <p><strong>Time:</strong> {formData.time}</p>
            <p><strong>Number of Guests:</strong> {formData.noofpeople}</p>
            <p><strong>Message:</strong> {formData.message}</p>
        </Modal>
        </div>
    )
}

export default Reservations;