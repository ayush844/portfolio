import project1 from "../assets/linkedinclone.jpg"

import project2 from "../assets/ecommerce.jpg"

import project3 from "../assets/poker.jpg"

export const HERO_CONTENT = `I'm a passionate developer with almost two years of hands-on experience crafting robust and scalable web applications. I specialize in MongoDB, React, Node.js, Express.js, and Next.js. My goal is to leverage this expertise to create innovative solutions that drive business growth and deliver exceptional user experiences. Beyond coding, I'm also a part-time blogger, sharing insights and experiences within the tech industry.`;

export const ABOUT_TEXT = `Hi 😀, I'm Ayush, a 20 year old web developer with nearly two years of hands-on experience in crafting dynamic web solutions. Proficient in React.js, Node.js, Express.js, MongoDB, and Next.js, I'm passionate about pushing the boundaries of web development. My enthusiasm for the field extends to blogging, where I regularly share insights on diverse topics, aiming to inspire and educate fellow developers. Additionally, I actively contribute to open-source projects, collaborating with peers to drive innovation and foster growth within the community.`;

export const EXPERIENCES = [
  {
    year: "Feb 2024 - Present",
    role: "Open Source Contributor",
    company: "Meshery",
    description: `As an open-source contributor for meshery, I focused on enhancing the website's visual appeal and resolving technical issues. My contributions aimed to improve user satisfaction and fix bugs on the website.`,
    technologies: ["Javascript", "React.js", "CSS"],
  }
];

export const PROJECTS = [
  {
    title: "Linkedin Clone",
    image: project1,
    description:
      "A fully functional linkedin clone. The project replicates core features such as user profiles, connections, job postings and messaging.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
  },
  {
    title: "E commerce website",
    image: project2,
    description:
    "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["React", "javascript"],
  },
  {
    title: "Online Poker Website",
    image: project3,
    description:
      "A poker website where multiple user can collaborate and play poker",
    technologies: ["React", "webRTC", "socket.io"],
  }
];

export const CONTACT = {
  address: "New Delhi, INDIA 🇮🇳",
  email: "ayush.xyz1625@gmail.com",
};
