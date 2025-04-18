// src/App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload } from 'react-icons/fa';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      }
    },
    opacity: {
      value: 0.3,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#666",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 0.5
        }
      },
      push: {
        particles_nb: 3
      }
    }
  },
  retina_detect: true
};

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      style={{
        left: position.x,
        top: position.y,
        opacity: hidden ? 0 : 1,
      }}
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 1, repeat: Infinity }}
    />
  );
};

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      <motion.a
        href="https://github.com/rajzzz10"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, color: "#6e5494" }}
      >
        <FaGithub />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/raj-kumar-mohanty-018-/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, color: "#0077b5" }}
      >
        <FaLinkedin />
      </motion.a>
      <motion.a
        href="https://x.com/Rajzzz_18"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, color: "#1DA1F2" }}
      >
        <FaTwitter />
      </motion.a>
      <motion.a
        href="mailto:rajkumarmohanty949@gmail.com"
        whileHover={{ scale: 1.2, color: "#ea4335" }}
      >
        <FaEnvelope />
      </motion.a>
    </div>
  );
};

const Navbar = ({ theme, toggleTheme }) => {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="navbar"
    >
      <div className="logo">
        <Link to="/">Raj.dev</Link>
      </div>
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>
          Portfolio
        </Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
          Contact Me
        </Link>
      </div>
      <a
        href="/Raj_kumar_RESUME.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          className="resume-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaDownload /> Download Resume
        </motion.button>
      </a>
    </motion.nav>
  );
};

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Router>
      <div className="app">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          className="particles-bg"
        />
        <CustomCursor />
        <SocialSidebar />

        <div className="content-wrapper">
          <Navbar />

          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </Router>
  );
}

export default App;