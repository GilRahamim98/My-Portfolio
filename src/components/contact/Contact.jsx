import React, { useState } from 'react'
import "./Contact.scss";
import { bios, socialIcons } from '../../Data'
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';


const Contact = () => {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [infoMessage, setInfoMessage] = useState({ text: "", success: null })
    const sendEmail = () => {
        const templateParams = {
            from_name: name,
            reply_to: email,
            phone,
            message
        };
        emailjs.send('service_x00fiap', 'template_79sftjl', templateParams, '3RjYBqpGX6nzoxOAN')
            .then((result) => {
                setInfoMessage({ text: "Email Sent!", success: true })
                setName("")
                setPhone("")
                setEmail("")
                setMessage("")
            }, (error) => {
                setInfoMessage({ text: "An Error occurred please try again!", success: false })

            });

    }

    return (
        <div className="container" id="contact">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ y: [-50, 0], opacity: 1 }}
                className="title"
            >
                <span>Get in touch</span>
                <h1>Contact Me</h1>
            </motion.div>
            <div className="contact_form">
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [-150, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='contact_left_container'>
                    <h3>Let's Have a coffee together</h3>
                    <p className='contact_text'>I would like to talk with you!</p>
                    {bios.map(contact => {
                        return (
                            <div className='contact_left' key={contact.id}>
                                <div className="icon">
                                    {contact.icon}
                                </div>
                                <p>{contact.value}</p>
                            </div>
                        )
                    })}
                    <div className="social_icons">
                        {socialIcons.map((socialIcon, index) => {
                            return (
                                <a key={index} href={socialIcon.link} target="_blank" rel="noreferrer" >
                                    {socialIcon.icon}
                                </a>
                            )
                        })}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [150, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="contact_right"

                >
                    <h3>Get In Touch</h3>

                    <div className="row">
                        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="row">
                        <input type="text" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="row">
                        <textarea placeholder='message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="btn"
                    >
                        <button onClick={sendEmail}>Send</button>
                    </motion.div>
                    {infoMessage.text !== "" && <p className={infoMessage.success ? 'success' : 'fail'}>{infoMessage.text}</p>}
                </motion.div>
            </div>
        </div>
    )
}

export default Contact