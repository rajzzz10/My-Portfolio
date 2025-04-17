// src/components/Portfolio.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "Resume Builder App",
    description: "An interactive resume builder with customizable templates, dynamic form sections based on user experience level, and live preview functionality. Users can download resumes in A4 format.",
    image: "https://images.pexels.com/photos/5598289/pexels-photo-5598289.jpeg?auto=compress&cs=tinysrgb&w=600",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/rajzzz10/resumebuilder", // update with actual repo link if available
    demo: "https://your-resume-builder.vercel.app" // update with actual deployed link if available
  },
  {
    id: 2,
    title: "FitZone App",
    description: "A fitness web app that offers personalized workout routines, diet plans, informative articles, and gym facts. Users can search terms like 'back', 'biceps', or 'push pull legs' to explore related workouts. All content is dynamically managed for easy updates and scalability.",
    image: "https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/rajzzz10/FitZone", // replace with your actual GitHub repo link
    demo: "https://fitzone-app.vercel.app" // replace with your actual deployed app link
  },  
  {
    id: 3,
    title: "PeerConnect - Video Call App",
    description: "A real-time peer-to-peer video calling application with advanced features including video/audio calls, screen sharing, live chat during meetings, and a dedicated chat section outside of meetings. Built for seamless virtual communication and collaboration.",
    image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tech: ["React", "Socket.io", "WebRTC", "Node.js", "Express"],
    github: "https://github.com/rajzzz10/VideoCall", // replace with your actual GitHub repo link
    demo: "https://peerconnect-app.vercel.app" // replace with your actual deployed app link
  }  
  // {
  //   id: 4,
  //   title: "Blog Platform",
  //   description: "A content management system with markdown support and user authentication.",
  //   image: "/api/placeholder/400/250",
  //   tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
  //   github: "https://github.com",
  //   demo: "https://example.com"
  // }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-links">
          <motion.a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaExternalLinkAlt />
          </motion.a>
        </div>
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-stack">
          {project.tech.map((tech, i) => (
            <span key={i} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <motion.div 
      className="portfolio-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        My Portfolio
      </motion.h1>
      
      <motion.p
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="section-description"
      >
        Here are some of my recent projects. Each demonstrates different aspects of my technical expertise.
      </motion.p>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;