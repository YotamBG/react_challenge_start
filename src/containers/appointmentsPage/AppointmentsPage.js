import React, { useState, useEffect } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm.js";
import { TileList } from "../../components/tileList/TileList.js";

export const AppointmentsPage = ({appointments, addAppointment, contacts }) => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duplicateTitle, setDuplicateName] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    if (!duplicateTitle) {
      addAppointment(title, contact, date, time);
    }
    setTitle("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList list={appointments} />
      </section>
    </div>
  );
};
