import { FaCss3, FaFigma, FaHtml5, FaJs, FaNodeJs, FaPython } from "react-icons/fa";
import {BiLogoDjango, BiLogoTypescript} from "react-icons/bi"

const skills = [
    {
        id: 1,
        name: "HTML",
        image: "html5.svg",
        icon: <FaHtml5 size={40} />,
        percentageNum: "95"
    },
    {
        id: 2,
        name: "CSS",
        image: "css3.svg",
        icon: <FaCss3 size={40} />,
        percentageNum: "90"
    },
    {
        id: 3,
        name: "Typescript",
        image: "javascript.svg",
        icon: <BiLogoTypescript size={40} />,
        percentageNum: "80"
    },
    {
        id: 4,
        name: "Next.js",
        image: "nextjs2.svg",
        icon: <FaNodeJs size={40} />,
        percentageNum: "95"
    },
    {
        id: 6,
        name: "Python",
        image: "python.svg",
        icon: <FaPython size={40} />,
        percentageNum: "75"
    },
    {
        id: 7,
        name: "Django",
        image: "django.svg",
        icon: <BiLogoDjango size={40} />,
        percentageNum: "85"
    },
    {
        id: 8,
        name: "Figma",
        image: "figma.svg",
        icon: <FaFigma size={40} />,
        percentageNum: "70"
    },
]

export default skills;