// src/components/Home.jsx
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Link } from 'react-router-dom';

const TypeWriter = () => {
  const titles = [
    "MERN Stack Developer",
    "React Developer",
    "Frontend Developer",
    "Backend Developer"
  ];

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const timer = setTimeout(() => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <span className="typewriter">{text}<span className="cursor">|</span></span>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <Stars
  radius={300}
  depth={80}
  count={8000}
  factor={6}
  saturation={0}
  fade
  speed={0.4}
/>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
};

const Home = () => {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero-section">
        <div className="left-section">
          <div className="image-container">
            <motion.div
              className="profile-image"
              animate={{
                boxShadow: [
                  "0 0 10px rgba(100, 100, 255, 0.5)",
                  "0 0 20px rgba(100, 100, 255, 0.8)",
                  "0 0 10px rgba(100, 100, 255, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <img src='/profile_img.jpg' alt="Raj Kumar Mohanty" />
            </motion.div>
          </div>
        </div>

        <div className="right-section">
          <motion.div
            className="text-content"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1>I am <span className="name">Raj Kumar Mohanty</span></h1>
            <h2><TypeWriter /></h2>
            <p>Full-Stack Developer specializing in React.js, Next.js, React Native, Node.js, Express.js, and MongoDB.Experienced in building and deploying web and mobile applications on AWS EC2 and Linux environments.Currently learning Docker, CI/CD, System Design, and cloud scalability concepts.</p>

            <div className="cta-buttons">
              <Link to="/portfolio">
                <motion.button
                  className="cta-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  className="cta-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Connect
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <section className="stats-section">

  <div className="stat-card">
    <h3>15+</h3>
    <p>Projects Built</p>
  </div>

  <div className="stat-card">
    <h3>Web & Mobile</h3>
    <p>Applications</p>
  </div>

  <div className="stat-card">
    <h3>AWS EC2</h3>
    <p>Deployments</p>
  </div>

</section>

<section className="skills-section">

  <h2>Tech Stack</h2>

  <div className="skills-grid">

    <div className="skill-category">
      <h3>Frontend</h3>
      <span>React.js</span>
      <span>Next.js</span>
      <span>JavaScript</span>
      <span>TypeScript</span>
    </div>

    <div className="skill-category">
      <h3>Backend</h3>
      <span>Node.js</span>
      <span>Express.js</span>
      <span>MongoDB</span>
      <span>REST APIs</span>
    </div>

    <div className="skill-category">
      <h3>Mobile</h3>
      <span>React Native</span>
    </div>

    <div className="skill-category">
      <h3>Cloud</h3>
      <span>AWS EC2</span>
      <span>Linux</span>
      <span>Git</span>
      <span>cPanel</span>
    </div>

  </div>

</section>

<section className="learning-section">

  <h2>Currently Exploring</h2>

  <div className="learning-grid">

    <div className="learning-card">
      Docker
    </div>

    <div className="learning-card">
      CI/CD
    </div>

    <div className="learning-card">
      System Design
    </div>

    <div className="learning-card">
      AWS Load Balancers
    </div>

    <div className="learning-card">
      Auto Scaling Groups
    </div>

  </div>

</section>

<section className="footer-cta">

  <h2>
    Let's Build Something Amazing Together
  </h2>

  <p>
    Open to opportunities, collaborations and exciting projects.
  </p>

  <Link to="/contact">
    <button className="cta-primary">
      Contact Me
    </button>
  </Link>

</section>

      <div className="scene-container">
        <Canvas>
          <Scene />
        </Canvas>
      </div>
    </motion.div>
  );
};

export default Home;