import React from 'react';
import "./footer.css"
import emailjs from '@emailjs/browser'


const footer = () => {
    
    const sendEmail = (e) => {
        e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_SER_ID,process.env.REACT_APP_TEMPL_ID,e.target,process.env.REACT_APP_PUB_API)
    }
    return (
        
        <div>
            <div className="footer">
                <div className="contactUs">
                    <form className="contact__form" onSubmit={sendEmail}>
                        <label htmlFor="emailFrom">Email:</label>
                        <input type="text" name="email_from" id="emailFrom" className="email__from" placeholder="person@example.com" required />
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" id="message" className="message__box" required></textarea>
                       <div className="button"><button>Send</button></div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default footer;