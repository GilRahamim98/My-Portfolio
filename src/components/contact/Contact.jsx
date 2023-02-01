import React, { useState } from 'react'
import "./Contact.scss";
import { bios, socialIcons } from '../../Data'
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { validate } from '../../validations'


const Contact = () => {
    const [contactForm, setContactForm] = useState({
        name: {
            text: "",
            validations: {
                required: true,
                minLength: 2,
            },
            errors: [],

        },
        phone: {
            text: "",
            validations: {
                required: true,
                minLength: 2,
            },
            errors: [],

        },
        email: {
            text: "",
            validations: {
                required: true,
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            },
            errors: [],

        },
        message: {
            text: "",
            validations: {
                required: true,
                minLength: 3,
            },
            errors: [],

        }
    })
    const [infoMessage, setInfoMessage] = useState({ text: "", success: null })


    const handleChange = ({ target: { name, value } }) => {
        const currentInput = contactForm[name]
        currentInput.text = value
        currentInput.errors = validate(name, value, currentInput.validations)
        setContactForm({ ...contactForm })
    }

    const validateInput = (input, value = "") => {
        const currentInput = contactForm[input]
        currentInput.value = value
        currentInput.errors = []
        if (currentInput.validations.required) {
            if (value.length === 0) {
                currentInput.errors.push({
                    value: `${input} is required`
                })
            }
        }
        if (currentInput.validations.minLength) {
            if (value.length < currentInput.validations.minLength) {
                currentInput.errors.push({
                    value: `${input} is must be at least ${currentInput.validations.minLength} characters`
                })
            }
        }
        if (currentInput.validations.pattern) {
            if (!currentInput.validations.pattern.test(value)) {
                currentInput.errors.push({
                    value: `${input} is invalid`
                })
            }
        }
    }


    const sendEmail = () => {

        let isValidSubmit = true
        for (const field in contactForm) {
            validateInput(field, contactForm[field].value)
            if (contactForm[field].errors.length > 0) {
                isValidSubmit = false
            }
            setContactForm({ ...contactForm })
        }
        if (isValidSubmit) {
            const templateParams = {
                from_name: contactForm.name.text,
                reply_to: contactForm.email.text,
                phone: contactForm.phone.text,
                message: contactForm.message.text
            };
            emailjs.send('service_x00fiap', 'template_79sftjl', templateParams, '3RjYBqpGX6nzoxOAN')
                .then((result) => {
                    setInfoMessage({ text: "Email Sent!", success: true })
                    for (const field in contactForm) {
                        contactForm[field].text = ""
                        setContactForm({ ...contactForm })
                    }
                }, (error) => {
                    setInfoMessage({ text: "An Error occurred please try again!", success: false })

                });
        }



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
                    {contactForm.name.errors.length > 0 && <p>{contactForm.name.errors[0].value}</p>}

                    <div className="row">
                        <input type="text" placeholder='Name' name="name" defaultValue={contactForm.name.text} onBlur={handleChange} />
                    </div>
                    {contactForm.phone.errors.length > 0 && <p>{contactForm.phone.errors[0].value}</p>}
                    {contactForm.email.errors.length > 0 && <p>{contactForm.email.errors[0].value}</p>}
                    <div className="row">
                        <input type="text" placeholder='Phone' name="phone" defaultValue={contactForm.phone.text} onBlur={handleChange} />
                        <input type="email" placeholder='Email' name="email" defaultValue={contactForm.email.text} onBlur={handleChange} />
                    </div>
                    <div className="row">
                        <textarea placeholder='message' name="message" defaultValue={contactForm.message.text} onBlur={handleChange}></textarea>
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