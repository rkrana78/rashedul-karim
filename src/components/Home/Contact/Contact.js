import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'
import Social from '../Social/Social';

const Contact = () => {
    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm('gmail224', 'template_fhx964l', e.target,
            'user_sQaqkXArkonx6DMpUcAns')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div className="contact-form" id="contact">
            <h2 className="text-center text-white">Get in Touch</h2>
            <form onSubmit={sendEmail}>
                <div className="row d-flex justify-content-center my-5 py-5">
                    <div class="ms-3 col-md-5">
                        <label for="name" className="form-label text-white">Name</label>
                        <input type="text" name="name" className="form-control w-75 " id="name" placeholder="Enter your name" />
                        <br />
                        <label for="exampleFormControlInput1" class="form-label text-white">Email address</label>
                        <input type="text" name="email" className="form-control w-75" id="exampleFormControlInput1" placeholder="Enter your email" />

                    </div>
                    <div class="ms-3 col-md-5">
                        <label for="exampleFormControlTextarea1" class="form-label text-white">Message</label>
                        <textarea className="form-control w-75" name="message" placeholder="Enter your message..." id="exampleFormControlTextarea1" rows="5"></textarea>
                        <br />
                        <button className="btn btn-success" type="submit">Send Message</button>
                    </div>
                </div>
            </form>
            <div className="d-flex justify-content-center">
                <Social />
            </div>
            
        </div>
    );
};

export default Contact;