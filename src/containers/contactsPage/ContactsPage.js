import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm.js";
import { TileList } from "../../components/tileList/TileList.js";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicateName, setDuplicateName] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    console.log("name, phone, email: ", name, phone, email);
    if (!duplicateName) {
      addContact(name, phone, email);
    }
    setName("");
    setPhone("");
    setEmail("");
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    console.log('contacts: ', contacts);
    const duplicates = contacts.filter((contact) => contact.name === name);
    console.log('duplicates: ', duplicates);
    if (duplicates.length > 0) {
      setDuplicateName(true);
      console.log('duplicate found');
    }else{
      setDuplicateName(false);
    }
  }, [name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={contacts} />
      </section>
    </div>
  );
};