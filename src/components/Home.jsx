// src/components/Home.jsx
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

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
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade
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
              <img src='/IMG_20230610_151137.jpg' alt="Raj Kumar Mohanty" />
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
            <p>Passionate about creating seamless web experiences with modern technologies. Specializing in the MERN stack with a focus on responsive design and user-friendly interfaces.</p>
            
            <div className="cta-buttons">
              <motion.button 
                className="cta-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
              <motion.button 
                className="cta-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="scene-container">
        <Canvas>
          <Scene />
        </Canvas>
      </div>
    </motion.div>
  );
};

export default Home;