import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiTypescript, SiPhp, SiJavascript } from "react-icons/si";

import work1 from "./assets/musicil.jpg";
import work2 from "./assets/surfshop.jpg";
import work3 from "./assets/portfolio-project.jpg";

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

export const skills = [
    {
        skill: <FaHtml5 />,
        level: "Expert"
    },
    {
        skill: <FaCss3 />,
        level: "Expert"
    },
    {
        skill: <SiJavascript />,
        level: "Expert"
    },
    {
        skill: <FaNodeJs />,
        level: "Expert"
    },
    {
        skill: <FaReact />,
        level: "Expert"
    },
    {
        skill: <SiTypescript />,
        level: "Intermediate"
    },
    {
        skill: <FaSass />,
        level: "Basic"
    },
    {
        skill: <SiPhp />,
        level: "Basic"
    },
]

export const projects = [
    {
        id: 1,
        img: work1,
        name: "MusicIL",
        category: "web",
        link: "https://musicil.netlify.app/",
        githubLink: "https://github.com/GilRahamim98/MusicIL"
    },
    {
        id: 2,
        img: work2,
        name: "Surf Shop",
        category: "web",
        link: "https://surfi.cyclic.app/",
        githubLink: "https://github.com/GilRahamim98/SurfShop"
    },
    {
        id: 3,
        img: work3,
        name: "Portfolio",
        category: "web",
        link: "",
        githubLink: "https://github.com/GilRahamim98/My-Portfolio"
    },

]