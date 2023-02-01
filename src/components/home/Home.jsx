import React from 'react'
import './Home.scss'
import portfolio from '../../assets/portfolio.jpeg'
import { Variant, motion } from 'framer-motion'

const Home = () => {
    const moveVariants = {
        animation: {
            y: [0, -15],
            transition: {
                yoyo: Infinity,
                duration: 2,
                delay: 1
            }

        }
    }
    return (
        <motion.div className="container " id='home'
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={
                {
                    duration: 2,
                    delay: 0.5
                }
            }>
            <div className='profile'>
                <img src={portfolio} alt='portfolio-img' />
            </div>
            <div className='profile_text'>
                <h3 className='name'>Hi, I'm <span>Gil Rahamim</span></h3>
                <span className='job'>Full Stack Web Developer</span>
                <span className='text'>Web development hobbyist<br /> seeking growth <br /> and learning opportunities.</span>
                <motion.a href="#contact"
                    whileHover={{ scale: 1.1 }}
                    variants={moveVariants}
                    animate="animation">
                    connect with me
                </motion.a>
                <div
                    className="front"

                >
                    Frontend Developer
                </div>
                <div
                    className="back"

                >
                    Backend Developer
                </div>
                <div
                    className="full"

                >
                    Fullstack Developer
                </div>
            </div>

        </motion.div>
    )
}

export default Home