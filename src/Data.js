import { FaHtml5, FaCss3, FaNodeJs, FaReact,FaAngular, FaSass, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiTypescript, SiPhp, SiJavascript } from "react-icons/si";
import { MdAlternateEmail } from "react-icons/md"
import work1 from "./assets/ITUBEZ.png";
import work2 from "./assets/surfshop.jpg";
import work3 from "./assets/portfolio-project.jpg";

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
        skill: <FaAngular />,
        level: "Intermediate"
    },
    {
        skill: <FaSass />,
        level: "Basic"
    },
]

export const projects = [
    {
        id: 1,
        img: work2,
        name: "Surf Shop",
        category: "web",
        link: "https://surfi.cyclic.app/",
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
        id: 2,
        img: work1,
        name: "Itubez",
        category: "web",
        link: "https://itubez.netlify.app/",
        githubLink: "https://github.com/GilRahamim98/youtube-clone"
    },

]
