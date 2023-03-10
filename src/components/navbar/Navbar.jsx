import React, { useState, useEffect } from 'react'
import "./Navbar.scss"
import { navLinks, socialIcons } from '../../Data'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { Link } from "react-scroll";

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const [scroll, setScroll] = useState(false);

    const menuVariants = {
        hidden: {
            scale: 0
        },
        visible: {
            scale: 50,
            transition: {
                type: "tween",
                duration: 0.5,
            }
        }
    }
    const navLinkVariants = {
        hidden: {
            display: "none",
            opacity: 0
        },
        visible: {
            opacity: 1,
            y: -30,
            transition: {
                delay: 0.7
            }
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 20)
        })
    }, [])
    return (
        <motion.div initial={{ y: -25 }}
            animate={{ y: -5 }}
            transition={{ duration: 0.5 }}
            className={scroll ? "header active" : "header"}>
            <div className='Nav_container'>
                <div className='logo'>
                    <h3>G</h3>
                </div>

                <ul className="nav_links">
                    {navLinks.map((navLink, index) => {
                        return <li key={index}>
                            <Link activeClass="active" smooth='easeInOutQuint' offset={-10} duration={500} spy to={`${navLink}`}>{navLink}</Link>
                        </li>
                    })}
                </ul>
                <div className="social_icons" >
                    {socialIcons.map((socialIcon, index) => {
                        return (
                            <a key={index} href={socialIcon.link} target="_blank" rel="noreferrer">
                                {socialIcon.icon}
                            </a>
                        )
                    })}
                </div>
                <div className="menu" >
                    <HiMenuAlt4 onClick={() => { setToggle(true) }} />
                </div>
                <motion.div className="closeMenu"
                    variants={menuVariants}
                    initial="hidden" animate={toggle ? "visible" : "hidden"}
                ></motion.div>

                <motion.div
                    variants={navLinkVariants}
                    animate={toggle ? "visible" : "hidden"}
                    className="menuX"
                >
                    <HiX onClick={() => setToggle(false)} />
                    {navLinks.map((navlink, index) => {
                        return <li key={index}>
                            <a href={`#${navlink}`} onClick={() => setToggle(false)}>{navlink}</a></li>
                    })}
                </motion.div>

            </div>

        </motion.div>
    )
}

export default Navbar