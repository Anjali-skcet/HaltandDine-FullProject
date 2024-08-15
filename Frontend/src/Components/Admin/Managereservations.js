import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Managereservations.css'; 
import Adminnavbar from './Adminnavbar';

const ManageReservations = () => {
  const [reservationList, setReservationList] = useState([]);

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    try {
      const response = await axios.get('http://localhost:8080/forkandfortune/getusers');
      setReservationList(response.data);
    } catch (error) {
      console.error('Error fetching reservations:', error);
    }
  };

  const handleAccept = async (id, tableno) => {
    try {
      await axios.put(`http://localhost:8080/forkandfortune/updatereservation/${id}`, {
        status: 'Confirmed',
        tableno
      });
      setReservationList(reservationList.map(reservation =>
        reservation.id === id ? { ...reservation, status: 'Confirmed', tableno } : reservation
      ));
      await sendEmailNotification(id, 'Confirmed', tableno);
    } catch (error) {
      console.error('Error accepting reservation:', error);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.put(`http://localhost:8080/forkandfortune/updatereservation/${id}`, { status: 'Rejected' });
      setReservationList(reservationList.map(reservation =>
        reservation.id === id ? { ...reservation, status: 'Rejected' } : reservation
      ));
      await sendEmailNotification(id, 'Rejected');
    } catch (error) {
      console.error('Error rejecting reservation:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/forkandfortune/deletereservation/${id}`);
      setReservationList(reservationList.filter(reservation => reservation.id !== id));
    } catch (error) {
      console.error('Error deleting reservation:', error);
    }
  };

  const sendEmailNotification = async (id, status, tableno = null) => {
    try {
      const reservation = reservationList.find(reservation => reservation.id === id);
      await axios.post('http://localhost:8080/api/reservations/email', {
        email: reservation.email,
        status,
        tableno,
        name: `${reservation.firstname} ${reservation.lastname}`,
        time: reservation.time,
      });
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div>
      <div className="manage-reservations">
        <Adminnavbar />
        <h1>Manage Reservations</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Time</th>
              <th>Guests</th>
              <th>Message</th>
              <th>Status</th>
              <th>Table No</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reservationList.map((reservation) => (
              <tr key={reservation.id}>
                <td>{`${reservation.firstname} ${reservation.lastname}`}</td>
                <td>{reservation.email}</td>
                <td>{reservation.date}</td>
                <td>{reservation.time}</td>
                <td>{reservation.noofpeople}</td>
                <td>{reservation.message}</td>
                <td>{reservation.status}</td>
                <td>
                  {reservation.status === 'Pending' ? (
                    <input
                      type="text"
                      placeholder="Assign Table"
                      onChange={(e) => (reservation.tableno = e.target.value)}
                    />
                  ) : (
                    reservation.tableno
                  )}
                </td>
                <td>
                  {reservation.status === 'Pending' && (
                    <>
                      <button onClick={() => handleAccept(reservation.id, reservation.tableno)}>Accept</button>
                      <button onClick={() => handleReject(reservation.id)}>Reject</button>
                    </>
                  )}
                  <button onClick={() => handleDelete(reservation.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageReservations;
