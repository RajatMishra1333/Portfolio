import emoji from "react-easy-emoji";

const greeting = {
  username: "Rajat Mishra",
  title: "Hi all, I'm Rajat",
  subTitle: emoji(
    "Full Stack Developer 👨‍💻 "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1d1GKcpL7CqSd2XBnk_AvIJknPHlHnjcl/view?usp=sharing",
};

const socialMediaLinks = {
  github: "https://github.com/RajatMishra1333",
  linkedin: "https://www.linkedin.com/in/rajat2458",
  gmail: "rajatmishra1333@gmail.com",
  facebook: "https://www.facebook.com/codewithrajat",
  twitter: "https://twitter.com/rajat2458",
};

const skillsSection = {
  title: "What I Do",
  subTitle: "Handling all app development activities and exploring data science.",
  skills: [
    "⚡ Proficient in building scalable and responsive web applications using React.js, Node.js, Express, MongoDB.",
    "⚡ Skilled in managing complete development cycles—from designing frontend components to developing backend APIs and handling databases.",
    "⚡  Capable of integrating AI tools and APIs like chatbots, recommendation systems, and personalized AI modules into applications.",
    "⚡  Experienced with version control, Docker, Jenkins, and deploying applications to cloud platforms like AWS, Vercel, and Netlify using CI/CD pipelines."
  ].map(emoji),


  softwareSkills: [

  {
    skillName: "MongoDB",
    classname: "logos:mongodb-icon",
    style: { backgroundColor: "transparent" },
  },
  {
    skillName: "Node.js",
    classname: "logos:nodejs-icon",
    style: { backgroundColor: "transparent" },
  },
  {
    skillName: "Express.js",
    classname: "skill-icons:expressjs-dark",
    style: { backgroundColor: "transparent" },
  },
  {
    skillName: "React.js",
    classname: "logos:react",
    style: { backgroundColor: "transparent" },
  },
  {
    skillName: "JavaScript",
    classname: "logos:javascript",
    style: { backgroundColor: "transparent" },
  },
  {
    skillName: "HTML5",
    classname: "logos:html-5",
    style: { backgroundColor: "transparent" },
  },
  {
    skillName: "CSS3",
    classname: "logos:css-3",
    style: { backgroundColor: "transparent" },
  },
  {
    skillName: "Git & GitHub",
    classname: "logos:github-icon",
    style: { backgroundColor: "transparent" },
  },
  {
    skillName: "Docker",
    classname: "logos:docker-icon",
    style: { backgroundColor: "transparent" },
  },
  {
    skillName: "AWS (Basics)",
    classname: "logos:aws",
    style: { backgroundColor: "transparent" },
  },

  ],
};

const workExperiences = {
  viewExperiences: true,
  experience: [
     {
      role: "Front-End Developer",
      company: "BigsMall",
      companylogo: require("./assets/images/bigsmall.webp"),
      date: "Aug 2023 – Jun 2024",
      desc: "Worked as a Frontend Developer at Bigsmall, where I was responsible for building and optimizing user interfaces to enhance customer experience and drive sales.",
    },  
    {
      role: "Web Designer",
      company: "Wellship Clinic",
      companylogo: require("./assets/images/Wellship-Logo.jpg"),
      date: "Jul 2024 – Nov 2024",
      desc: "Design, develop, and maintain enterprise-level applications, ensuring high performance and user satisfaction.",
    },
   
    {
      role: "Full Stack Developer",
      company: "Allcreates",
      companylogo: require("./assets/images/allcreates.webp"),
      date: "Feb 2025– Jul 2025",
      desc: "Design, develop and maintain website.",
    },
  ],
};

const openSource = {
  showGithubProfile: true,
  showGithubRepos: true,
  showProjects: true,
};



const certifications = {
  certifications: [
    {
      title: "MERN Stack development",
      subtitle: "- Tutedude",
      logo_path: "MERN.png",
      certificate_link:
        "https://drive.google.com/",
      alt_name: "MERN",
      color_code: "#F6EAEA",
    },
    {
      title: "DCA",
      subtitle: "-GTB Education",
      logo_path: "Diploma-in-Computer-Application.png",
      certificate_link:
        "https://drive.google.com/",
      alt_name: "Diploma",
      color_code: "#F0FFDD",
    },
    {
      title: "DSA With Python",
      subtitle: "- Tutedude",
      logo_path: "download.jpeg",
      certificate_link:
        "https://drive.google.com/",
      alt_name: "DSA",
      color_code: "#FEF6E6",
    },
    {
      title: "DevOps",
      subtitle: "- Tutedude",
      logo_path: "download2.png",
      certificate_link:
        "https://drive.google.com/",
      alt_name: "Tutedude",
      color_code: "#FDE9EA",
    },
   
  ],
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "With love for developing cool stuff, I love to write and teach others what I have learnt.",
  blogs: [
    {
    },
    {
    },
    {
    },
    {
    },
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "+91 7800582481",
  email_address: "rajatmishra1333@gmail.com",
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  workExperiences,
  openSource,
  blogSection,
  contactInfo,
  certifications,
};
