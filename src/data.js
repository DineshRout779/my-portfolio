import { nanoid } from 'nanoid';

const projects = [
  {
    id: nanoid(),
    title: 'Postline',
    img: '/imgs/projects/postline.webp',
    desc: 'Social Media App where users can interact with each other through posts ',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/DineshRout779/postline',
    live: 'https://dns-social.netlify.app/',
  },
  {
    id: nanoid(),
    title: 'CodeTales',
    img: '/imgs/projects/codetales.webp',
    desc: 'A blogging Web Application where one can publish and read blogs 📖',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/DineshRout779/codetales',
    live: 'https://codetales.vercel.app/',
  },
  {
    id: nanoid(),
    title: 'FoodHunt',
    img: '/imgs/projects/foodhunt.webp',
    desc: "A food delivery App built using Reactjs and Powered by Swiggy's API",
    technologies: ['React.js', 'TailwindCSS', 'Redux'],
    github: 'https://github.com/DineshRout779/foodhunt',
    live: 'https://foody-two.vercel.app/',
  },
  {
    id: nanoid(),
    title: 'Codwiz',
    img: '/imgs/projects/codwiz.webp',
    desc: 'An interactive quiz application to test your knowledge of programming languages.',
    technologies: ['React.js', 'TypeScript', 'MantineUI'],
    github: 'https://github.com/DineshRout779/codwiz',
    live: 'https://codwiz.vercel.app/',
  },
  {
    id: nanoid(),
    title: 'Notice Generator',
    img: 'https://shrtco.de/1eXuKm',
    desc: 'App that helps placement coordinators generate placement notice',
    technologies: ['React.js', 'TypeScript', 'MantineUI'],
    github: 'https://github.com/AshutoshDash1999/placement-notice-generator',
    live: 'https://placement-notice-generator.vercel.app/',
  },

  {
    id: nanoid(),
    title: 'Notes App',
    img: '/imgs/projects/notes.webp',
    desc: 'A notes app where one can add quick notes on the go. Data is saved locally.',
    technologies: ['React.js'],
    github: 'https://github.com/DineshRout779/react-notes-app',
    live: 'https://react-notes-app-rust.vercel.app/',
  },
  {
    id: nanoid(),
    title: 'Weather App',
    img: '/imgs/projects/weather.webp',
    desc: 'A weather app that tells weather details based on search query (city, state, etc)',
    technologies: ['React.js'],
    github: 'https://github.com/DineshRout779/weather-App',
    live: 'https://react-weather-app-fawn.vercel.app/',
  },
  {
    id: nanoid(),
    title: 'Triangle Quiz',
    img: '/imgs/projects/triangle.webp',
    desc: 'How much  do  you know  about triangles 🔺? Test your skills.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/DineshRout779/levelZero-triangleQuiz',
    live: 'https://serene-euclid-2b069d.netlify.app/',
  },
  {
    id: nanoid(),
    title: 'URL Shortener',
    img: '/imgs/projects/url.webp',
    desc: 'An app that helps to shorten URL with ease.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/DineshRout779/URL-shortening',
    live: 'https://url-shortening-seven.vercel.app/',
  },
  {
    id: nanoid(),
    title: 'Landing Pages',
    img: '/imgs/projects/landing-pages.webp',
    desc: 'Collection of all landing pages using HTML & CSS',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/DineshRout779/old-frontend-projects',
    live: 'https://brilliant-snickerdoodle-694771.netlify.app/',
  },
  {
    id: nanoid(),
    title: 'Mini JS Projects',
    img: '/imgs/projects/mini-js.webp',
    desc: 'Collection of mini Projects made using JavaScript',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/DineshRout779/Javascript-Projects',
    live: 'https://dineshrout779.github.io/Javascript-Projects/',
  },
  {
    id: nanoid(),
    title: 'Zigbee',
    img: '/imgs/projects/zigbee.webp',
    desc: 'A website for student developers club, MCA, OUTR.',
    technologies: ['nextjs', 'typescript', 'ChakraUI'],
    github: null,
    live: 'https://zigbeeoutr.in/',
  },
];

const skills = [
  {
    icon: 'html',
    title: 'HTML',
  },
  {
    icon: 'css',
    title: 'CSS',
  },
  {
    icon: 'javascript',
    title: 'JavaScript',
  },
  {
    icon: 'typescript',
    title: 'TypeScript',
  },
  {
    icon: 'react',
    title: 'React.js',
  },
  {
    icon: 'redux',
    title: 'Redux',
  },
  {
    icon: 'tailwindcss',
    title: 'TailwindCSS',
  },
  {
    icon: 'bootstrap',
    title: 'Bootstrap',
  },
  {
    icon: 'firebase',
    title: 'Firebase',
  },
  {
    icon: 'nodejs',
    title: 'Node.js',
  },
  {
    icon: 'expressjs',
    title: 'Express.js',
  },
  {
    icon: 'mongodb',
    title: 'MongoDB',
  },
  {
    icon: 'sass',
    title: 'Sass',
  },
  {
    icon: 'git',
    title: 'Git',
  },
  {
    icon: 'figma',
    title: 'Figma',
  },
  {
    icon: 'github',
    title: 'Github',
  },
  {
    icon: 'babel',
    title: 'Babel',
  },
  {
    icon: 'webpack',
    title: 'Webpack',
  },
];

export const data = { projects, skills };
