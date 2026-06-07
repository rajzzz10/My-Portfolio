// src/components/Portfolio.jsx
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "SOLP Learning Platform",
    description: "A complete learning management platform available on both web and mobile. Features role-based access for Admins, Mentors, Trainers, and Students. Users can purchase courses, watch video lessons, access notes, submit assignments, participate in discussions, and complete projects. The mobile app also includes AI-powered quiz generation based on selected topics for interactive learning.",
    image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tech: ["React", "React Native", "Node.js", "Express", "MongoDB", "AI Integration"],
    github: "",
    demo: "https://www.stepsoflearningprocess.com"
  },
  {
    id: 2,
    title: "Oneploy Job Portal",
    description: "A recruitment platform connecting companies, recruiters, and job seekers. Recruiters can create job postings, search candidates using filters like skills and experience, view detailed profiles, and connect with potential hires through a controlled messaging system. Users can apply for jobs, manage profiles, and communicate with recruiters after connection requests are accepted.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    github: "",
    demo: "https://www.oneploy.com"
  },
  {
    id: 8,
    title: "MLA Grievance & Organization Management Platform",
    description: "A comprehensive platform designed for grievance handling, event management, and organizational operations. Users can register, submit grievances, and track resolution status using unique grievance IDs. Administrators can assign grievances to officials, manage users and organizational roles, oversee events, and publish updates. The platform also includes social media automation for publishing content across multiple channels and supports fine-grained role-based access control for different departments and teams.",
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Role-Based Access",
      "Email Notifications"
    ],
    github: "",
    demo: ""
  },
  {
    id: 3,
    title: "EventLoop - Event Management Platform",
    description: "A multi-vendor event management platform where vendors can offer services such as catering, photography, decoration, and more. Dynamic forms adapt automatically based on the selected service type. Users can customize bookings, calculate pricing in real-time, and make payments through an integrated booking system.",
    image: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tech: ["React", "Node.js", "Express", "MongoDB", "Payment Gateway"],
    github: "",
    demo: "https://eventloop.com/"
  },
  {
    id: 5,
    title: "EMS - Employee Management System",
    description: "A web and mobile employee management platform that streamlines attendance, leave management, timesheets, and company communication. Employees can check in/out, submit leave requests, fill daily timesheets, and view holiday calendars. Admins can monitor attendance records, manage leaves, review timesheets, and publish company-wide notices and announcements.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tech: ["React", "React Native", "Node.js", "Express", "MongoDB"],
    github: "",
    demo: "https://ems.stepsoflearningprocess.com/"
  },
  {
    id: 6,
    title: "CMS - Client Acquisition & Marketing Platform",
    description: "A business automation platform designed for lead generation and customer outreach. The system extracts unstructured business information, converts it into organized datasets, and manages contacts across multiple countries and industries. It also supports automated email campaigns, scheduled outreach based on regional time zones, and centralized communication tracking.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tech: ["React", "Node.js", "Express", "MongoDB", "Email Automation"],
    github: "",
    demo: "https://cms.dayashankardas.com/"
  },
  {
    id: 7,
    title: "Inventory & Billing Management System",
    description: "A complete inventory and billing solution for businesses. The platform manages products, stock levels, purchases, sales, customer accounts, and invoice generation. Inventory is automatically updated during transactions, while business owners can track receivables, manage customer balances, and view detailed sales and purchase analytics through reporting dashboards.",
    image: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "",
    demo: "https://estimate.thekamalenterprises.in/"
  }
];

const ProjectCard = ({ project, index }) => {
  const [showModal, setShowModal] = useState(false);
  const handleDemoClick = (e) => {
    console.log("clicked")
    if (!project.demo) {
      e.preventDefault();
      setShowModal(true);
    }
  };
  return (
    <>
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
            {/* <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              <FaGithub />
            </motion.a> */}
            {/* <motion.a
              href={project.demo || "#"}
              target={project.demo ? "_blank" : "_self"}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              onClick={handleDemoClick}
            >
              <FaExternalLinkAlt />
            </motion.a> */}
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
      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="modal-overlay"
            onClick={() => setShowModal(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2>Project Not Deployed</h2>
              <p>This project is not deployed yet. It will be available soon!</p>
              <button onClick={() => setShowModal(false)}>Close</button>
            </motion.div>
          </motion.div>

        )}
      </AnimatePresence>

    </>
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
        Featured Projects
      </motion.h1>

      <motion.p
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="section-description"
      >
        A collection of web and mobile applications I've built, ranging from learning platforms and job portals to enterprise management systems and business automation solutions.
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