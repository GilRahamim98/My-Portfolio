import { FaHtml5, FaCss3, FaNodeJs, FaReact,FaAngular, FaDocker , FaPhoneAlt, FaUser, FaLinkedin, FaGithub,FaPython } from "react-icons/fa";
import { TbBrandCSharp,TbSql  } from "react-icons/tb";
import { SiTypescript, SiJavascript,SiMongodb  } from "react-icons/si";
import { MdAlternateEmail } from "react-icons/md"

import work2 from "./assets/surfshop.jpg";
import work3 from "./assets/portfolio-project.jpg";
import work4 from "./assets/academiax.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [{ icon: <FaLinkedin />, link: "https://www.linkedin.com/in/gilrahamim/" }, { icon: <FaGithub />, link: "https://github.com/GilRahamim98" }]


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
        icon: <MdAlternateEmail />,
        key: "Email",
        value: "gilrahamimgr@gmail.com"
    }
]

export const skills = [
    {
        skill: <TbBrandCSharp />,
    },
    {
        skill: <FaPython />,
    },
    {
        skill: <SiJavascript />,
    },
    {
        skill: <SiTypescript />,
    },
    {
        skill: <FaNodeJs />,
    },
    {
        skill: <FaReact />,
    },
    {
        skill: <FaAngular />,
    },
    {
        skill: <TbSql />,
    },
    {
        skill: <SiMongodb />,
    },
    {
        skill: <FaDocker  />,
    },
    {
        skill: <FaHtml5 />,
    },
    {
        skill: <FaCss3 />,
    },

]

export const projects = [
    {
        id: 1,
        img: work2,
        name: "Surf Shop",
        category: "web",
        link: "https://surfi.onrender.com",
        githubLink: "https://github.com/GilRahamim98/SurfShop"
    },
    {
        id: 2,
        img: work3,
        name: "Portfolio",
        category: "web",
        link: "https://gil-rahamim.netlify.app/",
        githubLink: "https://github.com/GilRahamim98/My-Portfolio"
    },
    {
        id: 3,
        img: work4,
        name: "AcademiaX",
        category: "web",
        githubLinkBackend: "https://github.com/GilRahamim98/LearningPlatform",
        githubLinkFrontend: "https://github.com/GilRahamim98/LearningPlatform-Frontend"
    },


]
