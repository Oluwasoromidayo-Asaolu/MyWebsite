import React, { useEffect } from "react";
import swal from 'sweetalert2'
import './contact.css';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

const Anothercontact = () => {
    useEffect(() => {
        emailjs.init('LZaVaYrnq4wBK27GE');
    }, []);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        event.persist();

        const btn = document.getElementById('button');
        btn.value = 'Sending...';

        const params = {
            from_name: event.target.elements.fullname.value,
            email_id: event.target.elements.email_id.value,
            message: event.target.elements.message.value,
        };

        emailjs.send('service_rfe7knc', 'template_bs3u0kd', params)
            .then(() => {
                btn.value = 'Send Email';
                swal.fire({
                    title: 'Message Sent!',
                    icon: 'success',
                    showConfirmButton: false,
                    showCancelButton: true, 
                    cancelButtonText: 'Okay'
                });
                event.target.reset();
            })
            .catch((err) => {
                btn.value = 'Send Email';
                swal.fire({
                    title: 'Error',
                    text: JSON.stringify(err),
                    icon: 'error',
                });
            });
    } 

return (
    <section id="contact">
        <div className="contact">
            <div>
                <div>
                    <span className="contact-h2-div">CONTACT</span>
                </div>
                <h1 className="contact-h1">Got a problem to solve?</h1>
                <p className="contact-p">Get your space suit ready and tell me your ideas to develop <span className="dream-website">your dream website.</span></p>
            </div>
            <form id="form" onSubmit={handleFormSubmit} className="form-div">
                <label htmlFor="fullname">NAME</label>
                <input type="text" id="fullname" name="firstname" placeholder="Your name.." required />

                <label htmlFor="email_id">EMAIL</label>
                <input type="text" id="email_id" name="lastname" placeholder="Your email.." required />

                <label htmlFor="message">MESSAGE</label>
                <textarea id="message" name="subject" placeholder="Write something.." required style={{ height: "200px" }}></textarea>

                <div className="second-div">
                    <p className="email-address"><FontAwesomeIcon className="contact-icon" icon={faEnvelope} /> asaoluoluwasoromidayo@gmail.com</p>
                    <button type="submit" id="button" className="contact-button">SEND MESSAGE <FontAwesomeIcon className="contact-icon contact-send-button-icon" icon={faRocket} /></button>
                </div>
            </form>
        </div>
    </section>
);
}

export default Anothercontact;
