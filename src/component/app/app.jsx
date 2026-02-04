import awsCert from "../../assets/awscert.png";
import mlCert from "../../assets/mlcert.png";
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaCogs, FaReact, FaDatabase, FaFirefoxBrowser,FaMicrochip, FaCodeBranch,FaObjectGroup } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

export const skills = [
  {
    icon: <SiCplusplus />,
    title: "C++",
    desc: "Proficient in C++ with strong problem-solving skills and experience in data structures, algorithms, and system-level programming.",
  },
  {
    icon: <FaPython />,
    title: "Python",
    desc: "Skilled Python developer with hands-on experience in automation, scripting, and building scalable applications.",
  },
  {
    icon: <FaCogs />,
    title: "Machine Learning",
    desc: "Enthusiastic about machine learning, with practical experience in data analysis, model building, and AI-driven solutions.",
  },
  {
    icon: <FaHtml5 />,
    title: "HTML",
    desc: "Detail-oriented in crafting semantic and accessible HTML for responsive and user-friendly web applications.",
  },
  {
    icon: <FaCss3Alt />,
    title: "CSS",
    desc: "Creative with CSS, capable of designing visually appealing layouts and responsive designs across devices.",
  },
  {
    icon: <FaJs />,
    title: "JavaScript",
    desc: "Proficient in JavaScript with experience in dynamic web applications, DOM manipulation, and front-end development.",
  },
  {
    icon: <FaReact />,
    title: "React",
    desc: "Skilled in React.js for creating scalable and interactive user interfaces using functional components, Hooks, component lifecycle management, and efficient state handling.",
  },
];

export const core_subject=[
  {
    icon: <FaDatabase />,
    title: "Database Management System",
    abbr: "(DBMS)",
    desc: "Strong understanding of database concepts including normalization, indexing, SQL queries, transactions, constraints, and relational database design using systems like MySQL."
  },
  {
    icon: <FaMicrochip />,
    title: "Operating System",
    abbr: "(OS)",
    desc: "Well-versed in core operating system concepts such as process management, CPU scheduling, memory management, deadlocks, file systems, and synchronization."
  },
  {
    icon: <FaCodeBranch />,
    title: "Data Structures and Algorithms",
    abbr: "(DSA)",
    desc: "Proficient in data structures and algorithms including arrays, linked lists, stacks, queues, trees, graphs, recursion, and problem-solving using C++ and Python."
  },
  {
    icon: <FaObjectGroup />,
    title: "Object-Oriented Programming",
    abbr: "(OOPS)",
    desc: "Solid grasp of object-oriented programming principles such as encapsulation, inheritance, polymorphism, abstraction, and design using C++ and Java."
  },
];

export const projects = [
  {
    title: "Laptop Price Prediction",
    date: "2025",
    desc: "A machine learning project that predicts laptop prices based on specifications such as brand, processor, RAM, storage, and display using regression models and data preprocessing techniques.",
    github: "https://github.com/mukulkr30/Laptop-Price-Prediction.git",
  },
  {
    title: "Time Management Dashboard",
    date: "2025",
    desc: "Developed an interactive time management dashboard for organizing tasks, setting priorities, tracking progress, and visualizing productivity metrics.",
    github: "https://github.com/mukulkr30/Dashboard-time-management",
  },
  {
    title: "Personal Portfolio",
    date: "2026",
    desc: "A personal portfolio website showcasing projects, skills, and experience with a modern, responsive UI and interactive components built using React.",
    github: "https://github.com/mukulkr30/portfolio",
  },
  {
    title: "Vehicle Speed Detection System",
    date: "2024",
    desc: "Real-time vehicle speed detection using OpenCV and machine learning techniques. Includes vehicle detection, tracking, and speed estimation.",
    github: "https://github.com/mukulkr30/vehicle-speed-detection",
  },
  
];

export const certificates = [
  {
    img: awsCert,
    link: "https://www.credly.com/badges/5e867c90-dc17-47d2-9dff-cdb59e37688f", 
  },
  {
    img: mlCert,
    link: "https://coursera.https://www.coursera.org/account/accomplishments/verify/U7OHF03ALAPR/", 
  },
];