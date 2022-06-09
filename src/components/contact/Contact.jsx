 import React from 'react';
 import './contact.scss';
 import { FaReact, FaMarkdown } from 'react-icons/fa';
 import { BiMailSend } from 'react-icons/bi';
 import { GiMailbox } from 'react-icons/gi';
 import { useState } from 'react';
 
 const Contact = () => {
     const [message, setMessage] = useState(false);
     const handleSubmit = (e) => {
            e.preventDefault();
            setMessage(true)
     }
     return (
         <div className='contact' id='contact'>
             <div className="left">
                <GiMailbox/>
             </div>
             <div className="right">
                 <h2>Get in touch! Send me an email...</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='eMail' />
                    <textarea placeholder='Message' cols="30" rows="10"></textarea>
                    <button type='submit'>Send</button>
                    { message && <span>Thank you for your message! I'll respond as soon as I can.</span>}
                </form>
             </div>
             
              
             
             
         </div>
     );
 }
 
 export default Contact;
 