import React from "react";
import {ContactPicker} from '../../components/contactPicker/ContactPicker.js';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleContactChange = (e) => {
    setContact(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <label>
        Date:
        <input type="date" value={date} min={getTodayString()} onChange={handleDateChange} />
      </label>
      <label>
        Time:
        <input type="time" value={time} onChange={handleTimeChange} />
      </label>
      <ContactPicker list={contacts} onChange={handleContactChange}/>
      <input type="submit" value="Submit" />
    </form>
  );
};
