import React, { useEffect, useState } from 'react';
import './Portfolio.scss'
import { projects } from '../../Data'
import { FiGithub, FiEye } from "react-icons/fi"
import { motion } from 'framer-motion';

const Portfolio = () => {
    const [works, setWorks] = useState([])

    useEffect(() => {
        setWorks(projects)
    }, [])



    return (
        <div className="container" id="portfolio">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ y: [-50, 0], opacity: 1 }}
                viewport={{ once: true }}
                className="title"

            >
                <span>My Work</span>
                <h1>Awesome Projects</h1>
            </motion.div>

            <motion.div
                initial={{ x: 0, opacity: 0 }}
                whileInView={{ x: [-250, 0], opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0, y: -50 }}
                className="workImages"
            >
                {works.map((work) => {
                    return (
                        <div className="workImage"
                            key={work.id}
                        >
                            <img src={work.img} alt="workImg" />
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className='hoverLayer'
                            >
                                {
                                    work.id === 3 ? <>
                                        <motion.a href={work.githubLinkBackend} target="_blank"
                                            whileInView={{ scale: [0, 1] }}
                                            whileHover={{ scale: [1, 1.1] }}
                                            transition={{ duration: 0.3 }}
                                            title="View Backend Code"
                                        >
                                            <FiGithub />
                                        </motion.a>

                                        <motion.a href={work.githubLinkFrontend} target="_blank"
                                            whileInView={{ scale: [0, 1] }}
                                            whileHover={{ scale: [1, 1.1] }}
                                            transition={{ duration: 0.3 }}
                                            title="View Frontend Code"
                                        >
                                            <FiGithub />
                                        </motion.a>
                                    </> :
                                        <>
                                            <motion.a href={work.githubLink} target="_blank"
                                                whileInView={{ scale: [0, 1] }}
                                                whileHover={{ scale: [1, 1.1] }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <FiGithub />
                                            </motion.a>

                                            <motion.a href={work.link} target="_blank"
                                                whileInView={{ scale: [0, 1] }}
                                                whileHover={{ scale: [1, 1.1] }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <FiEye />
                                            </motion.a>
                                        </>
                                }

                            </motion.div>
                        </div>
                    )
                })}
            </motion.div>
            <motion.div
                initial={{ x: 0, opacity: 0 }}
                whileInView={{ x: [250, 0], opacity: 1 }}
                transition={{ duration: 1 }}
                className="talk"
            >
                <div className="talk_left">
                    <h3>So let's talk about <br /> <span>your next projects</span></h3>
                </div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="talk_right">
                    <a href="#contact"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </motion.div>

        </div>
    )
}
export default Portfolio