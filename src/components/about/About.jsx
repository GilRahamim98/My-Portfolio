import React from 'react'
import './About.scss'
import { motion } from 'framer-motion';
import portfolio from '../../assets/portfolio.jpeg'
import { bios } from '../../Data';
import cv from '../../assets/Gil_Rahamim_CV.pdf'

const About = () => {
    return (
        <div className='container' id='about'>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ y: [-50, 0], opacity: 1 }}
                className="title">
                <span>Who Am I?</span>
                <h1>About Me</h1>
            </motion.div>
            <div className="about_container">
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [-250, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="about_left">
                    <motion.img src={portfolio}
                        whileHover={{ y: -48, x: -55 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>
                <motion.div className="about_right"
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [250, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                >

                    <p>A creative and motivated individual with a passion for web development, seeking opportunities to expand knowledge and contribute to challenging projects.</p>
                    {bios.map(bio => {
                        return (
                            <div className="bio" key={bio.id}>
                                <span className='bioKey'>{bio.icon}{bio.key}</span>
                                <span className='bioValue'>{bio.value}</span>
                            </div>
                        )
                    })}
                    <motion.a href={cv} download
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    >
                        Download CV
                    </motion.a>
                </motion.div>

            </div>
        </div>
    )
}

export default About
