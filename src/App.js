import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import AddContact from "./AddContact";
import Contactli from "./Contactli";
import './App.css';

function App() {
  const lckey = "contacts"
  const [contacts, setContact] = useState([]);
  const addcontacthandler = (contact) => {
    console.log(contact);
    setContact([...contacts, {id: uuid(), ...contact}]);
  };
  const removecontact = (id) => {
    const newcontactlist = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContact(newcontactlist);
  }
  useEffect(() => {
    const retrievedata = JSON.parse(localStorage.getItem(lckey));
    if(retrievedata){
      setContact(retrievedata);
    }
  },[]);
  useEffect(() => {
    localStorage.setItem(lckey, JSON.stringify(contacts))
  },[contacts]);
  return (
    <div className="App">
      <div className="container"><h1 className="heading">My Contacts</h1>
      <AddContact addcontacthandler={addcontacthandler}/>
      <Contactli contacts={contacts} getContactId={removecontact}/>
      </div>
    </div>
  );
}

export default App;
