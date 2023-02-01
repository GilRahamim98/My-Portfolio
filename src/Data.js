import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaFigma, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { BsMedium } from "react-icons/bs";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [<FaLinkedin />, <FaGithub />]


export const bios = [
    {
        id: 1,
        icon: <FaUser />,
        key: "Name",
        value: "Gil Rahamim"
    },
    {
        id: 2,
        icon: <FaPhoneAlt />,
        key: "Phone",
        value: "+972548076177"
    },
    {
        id: 3,
        icon: <FaPaperPlane />,
        key: "Email",
        value: "gilrahamimgr@gmail.com"
    }
]