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
                className="title"
            >
                <span>What I Expert In?</span>
                <h1>Skills</h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ y: [-50, 0], opacity: 1 }}
                className="skills"
            >
                {skills.map((icon, index) => {
                    return (
                        <div key={index} className="tools" >
                            {icon.skill}
                            <h3 className={icon.level.length > 7 ? 'long_level' : 'short_level'}>{icon.level}</h3>
                        </div>
                    )
                })}
            </motion.div>


        </div>
    )
}

export default Skills