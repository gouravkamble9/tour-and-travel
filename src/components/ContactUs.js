import React from 'react'
import './ContactUsStyle.css'

const ContactUs = () => {
  return (
    <div className='form-container'>
        <h1>Send a message to Us</h1>
        <form action="">
            <input type="text" placeholder='Name'/>
            <input type="text" placeholder='Email'/>
            <input type="text" placeholder='Subject'/>
            <textarea placeholder='Message' rows="4"></textarea>
            <button>Send Message</button>
        </form>
    </div>
  )
}

export default ContactUs