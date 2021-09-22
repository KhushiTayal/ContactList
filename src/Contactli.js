 import React from "react";
 import ContactCard from "./ContactCard";
 import './Contactli.css'

 const Contactli = (props) => {
     console.log(props);
     const deleteContactHandler = (id) => {
         props.getContactId(id);
     }
     const renderlist = props.contacts.map((contact) => {
         return(
             <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
         );
     })
     return(
         <div className="abc">
         <h2 className="heading2">Contact List</h2>
         <div className="xyz">{renderlist}</div>
         </div>
     );
 }

 export default Contactli;