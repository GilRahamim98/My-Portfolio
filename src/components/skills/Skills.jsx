import React from 'react'
import './Skills.scss'
import { skills } from '../../Data';

import { motion } from 'framer-motion';

const Skills = () => {

    return (
        <div className="container" id="skills">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ y: [-50, 0], opacity: 1 }}
                viewport={{ once: true }}
                className="title"
            >
                <span>What I Expert In?</span>
                <h1>Skills</h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ y: [-50, 0], opacity: 1 }}
                viewport={{ once: true }}
                className="skills"
            >
                {skills.map((icon, index) => {
                    return (
                        <div key={index} className="tools" >
                            {icon.skill}
                        </div>
                    )
                })}
            </motion.div>


        </div>
    )
}

export default Skills