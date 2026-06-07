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
    "React Native Developer",
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
      {/* <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} /> */}
      <OrbitControls
  enableZoom={false}
  enablePan={false}
  enableRotate={false}
  autoRotate
  autoRotateSpeed={0.5}
/>
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
          <h3>10+</h3>
          <p>Projects Built</p>
        </div>

        <div className="stat-card">
          <h3>Web & Mobile</h3>
          <p>Applications</p>
        </div>

        <div className="stat-card">
          <h3>AWS EC2 , Cpanel , etc</h3>
          <p>Deployments</p>
        </div>

      </section>

      <section className="skills-section">
  <h2>Technical Expertise</h2>

  <div className="skills-grid">

    <div className="skill-card">
      <div className="skill-icon">⚛️</div>
      <h3>Frontend Development</h3>
      <p>
        Building responsive, scalable and modern web applications.
      </p>

      <div className="skill-tags">
        <span>React.js</span>
        <span>Next.js</span>
        <span>JavaScript</span>
        <span>TypeScript</span>
        <span>HTML5</span>
        <span>CSS3</span>
      </div>
    </div>

    <div className="skill-card">
      <div className="skill-icon">🖥️</div>
      <h3>Backend Development</h3>
      <p>
        Developing APIs, authentication systems and business logic.
      </p>

      <div className="skill-tags">
        <span>Node.js</span>
        <span>Express.js</span>
        <span>MongoDB</span>
        <span>REST APIs</span>
        <span>JWT</span>
      </div>
    </div>

    <div className="skill-card">
      <div className="skill-icon">📱</div>
      <h3>Mobile Development</h3>
      <p>
        Cross-platform mobile applications using React Native.
      </p>

      <div className="skill-tags">
        <span>React Native</span>
        <span>Expo</span>
        <span>Android</span>
        <span>iOS</span>
      </div>
    </div>

    <div className="skill-card">
      <div className="skill-icon">☁️</div>
      <h3>Cloud & Deployment</h3>
      <p>
        Deploying and managing applications in production environments.
      </p>

      <div className="skill-tags">
        <span>AWS EC2</span>
        <span>Linux</span>
        <span>Vercel</span>
        <span>cPanel</span>
        <span>Git</span>
        <span>GitHub</span>
      </div>
    </div>

  </div>
</section>

      <section className="learning-section">
  <h2>Currently Exploring</h2>

  <div className="learning-grid">

    <div className="learning-card">
      <span className="learning-icon">🐳</span>
      <h3>Docker</h3>
      <p>Containerization & deployment workflows</p>
    </div>

    <div className="learning-card">
      <span className="learning-icon">⚙️</span>
      <h3>CI/CD</h3>
      <p>Automated testing and deployments</p>
    </div>

    <div className="learning-card">
      <span className="learning-icon">🏗️</span>
      <h3>System Design</h3>
      <p>Scalable architecture patterns</p>
    </div>

    <div className="learning-card">
      <span className="learning-icon">☁️</span>
      <h3>AWS Load Balancers</h3>
      <p>Traffic distribution strategies</p>
    </div>

    <div className="learning-card">
      <span className="learning-icon">🚀</span>
      <h3>Auto Scaling</h3>
      <p>High availability infrastructure</p>
    </div>

  </div>
</section>

      <section className="footer-cta">

  <div className="cta-card">

    <span className="cta-badge">
      Available For Opportunities
    </span>

    <h2>
      Building Scalable Web & Mobile Applications
    </h2>

    <p>
      Looking for a Full-Stack MERN Developer?
      Let's discuss your next project, product,
      or engineering opportunity.
    </p>

    <Link to="/contact">
      <button className="cta-primary">
        Get In Touch
      </button>
    </Link>

  </div>

</section>

      {/* <div className="scene-container">
        <Canvas>
          <Scene />
        </Canvas>
      </div> */}
    </motion.div>
  );
};

export default Home;