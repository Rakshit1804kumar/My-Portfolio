// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
// Experience Section Logo's
import EduSkills from './assets/company_logo/EduSkills.png';
import CodeTech from './assets/company_logo/CodeTech.png';
import Wipro from  './assets/company_logo/Wipro.png';

// Education Section Logo's
import GU from './assets/education_logo/GU.png';
import pps from './assets/education_logo/pps.png';

// Project Section Logo's
import Snake from './assets/work_logo/Snake.png';
import TheHungry from './assets/work_logo/TheHungry.png';
import wealthHome from './assets/work_logo/wealthHome.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo }
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo }
    ],
  },
];

  export const experiences = [
    {
  id: 0,
  img: Wipro, 
  role: "Java Full Stack Developer Intern",
  company: "Wipro (TalentNext)",
  date: "July 2025 – October 2025",
  desc: "Completed a Java Full Stack Developer internship under the Wipro TalentNext program, where I worked on building full-stack applications using Core Java, Advanced Java, SQL, and web technologies. Gained hands-on experience in object-oriented programming, database connectivity (JDBC), and developing scalable enterprise-level applications.",
  skills: [
    "Core Java",
    "Advanced Java",
    "OOPs",
    "JDBC",
    "SQL",
    "HTML",
    "CSS",
    "JavaScript"
  ],
},

    {
      id: 1,
      img: EduSkills,
      role: "Fullstack Developer Intern",
      company: "EduSkills",
      date: "October 2024 - December 2024",
      desc: "Completed a virtual Web Full Stack Developer internship at EduSkills, where I built and deployed mini-projects using HTML, CSS, JavaScript, and Node.js. Gained practical experience in both front-end and back-end development, strengthening my understanding of full-stack web technologies.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "Git & Github",
      ],
    },
    {
      id: 2,
      img: CodeTech,
      role: "Java Developer Intern",
      company: "CodTech IT Solutions",
      date: "June 2024 - July 2024",
      desc: "Completed a Java Programming Internship at CodTech IT Solutions, where I worked on console-based and GUI applications. Enhanced my skills in core Java, OOP concepts, and GUI development using Swing and AWT under expert guidance.",
      skills: [
        "Core Java",
        "OOPs",
        "Java Swing",
        "AWT",
      ],
    },
  ];
  
  export const education = [
    {
      id: 1,
      img: GU,
      school: "Galgotias University, Noida",
      date: "Sept 2022 - Aug 2026",
      grade: "75%",
      desc: "I am currently pursuing my B.Tech in Computer Science and Engineering from  Galgotias University, Noida, and will graduate in 2026. My academic journey has covered key subjects like Data Structures, Algorithms, Web Development, and Database Management Systems, allowing me to apply theoretical knowledge through practical projects and hands-on learning.",
      degree: "Bachelor of Technology – B.Tech (Computer Science and Engineering)",
    },
    {
      id: 2,
      img: pps,
      school: "Parker Public Senior Secondary School,Bijnor",
      date: "Apr 2020 - March 2021",
      grade: "67%",
      desc: "I completed my class 12 education from Parker Public Senior Secondary School, Budhanpur Bijnor, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Physical Education.",
      degree: "CBSE (XII) - PCM",
    },
    {
      id: 3,
      img: pps,
      school: "Parker Public Senior Secondary School,Bijnor",
      date: "Apr 2018 - March 2019",
      grade: "79%",
      desc: "I completed my class 10 education from Parker Public Senior Secondary School, Budhanpur Bijnor, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE (X) - Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Snake Mania",
      description:
      "The game features crisp sound effects for actions such as moving, eating food, and game over, which help enhance player engagement. The codebase is organized into separate files (HTML for structure, CSS for styling, JavaScript for logic), making it modular and easy to understand or extend.",
       image: Snake,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Rakshit1804kumar/Snake-Game",
      webapp: "https://rakshit1804kumar.github.io/Snake-Game/",
    },
    {
      id: 1,
      title: "The Hungry",
      description:
        "“The Hungry” is a restaurant-/food-themed landing page built with a modern web front-end that highlights a variety of mouth-watering menu specialties such as burgers, pizza, sweets, cold drinks, and breakfast items. The design is visually engaging, featuring attractive food imagery, smooth layouts, and clear call-to-action buttons like “Order Now” to encourage user interaction.",
      image: TheHungry,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Rakshit1804kumar/The-Hungry",
      webapp: "https://rakshit1804kumar.github.io/The-Hungry/",
    },
    {
      id: 2,
      title: "Wealth Home",
      description:
        "Wealth-Home is a responsive real-estate web template designed for users who want to buy, sell, or rent properties. It has a clean, modern UI which includes featured listings (with images, pricing, bedrooms, baths, area), customer testimonials, and navigation quick-links for ease of use.",
      image: wealthHome,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Rakshit1804kumar/Wealth-home",
      webapp: "https://rakshit1804kumar.github.io/Wealth-home/",
    },
  ];