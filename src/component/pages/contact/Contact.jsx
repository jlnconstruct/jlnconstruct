import React from 'react'
import "./Contact.css";

function Contact() {
  return (
    <div className='container_contact'>
        <h2 className="titre_contact">Contact</h2>
        <form className='form_contact' action="">
          <div className="input_nom">
            <label htmlFor="">Nom</label>
            <input className="input" type="text" placeholder='Nom'/>
          </div>
          <div className="input_phone">
            <label htmlFor="">Téléphone</label>
            <input className="input" type="text" placeholder='Téléphone'/>
          </div>
          <div className="input_email">
            <label htmlFor="">Email</label>
            <input className="input" type="email" placeholder='Email'/>
          </div>
          <div className="input_message">
            <label htmlFor="">Message</label>
            <textarea className="textarea" name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
          </div>
          <button type="submit" disabled>Contacter</button>
        </form>
        <div className="map"></div>

    </div>
  )
}

export default Contact