// src/components/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const FloatingSphere = ({ position, color, speed }) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} transparent opacity={0.6} />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} />
      <FloatingSphere position={[-4, 2, -5]} color="#8a2be2" speed={1} />
      <FloatingSphere position={[4, -2, -3]} color="#4169e1" speed={1.5} />
      <FloatingSphere position={[0, 4, -6]} color="#1e90ff" speed={2} />
      <OrbitControls enableZoom={false} />
    </>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // This would typically send the data to a backend
    console.log('Form submitted:', formData);
    alert('Form submitted! (Note: This is frontend only, no data is actually sent)');
  };
  
  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: '0 0 15px rgba(138, 43, 226, 0.5)'
    }
  };
  
  return (
    <motion.div 
      className="contact-container"
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
        Get In Touch
      </motion.h1>
      
      <div className="contact-content">
        <motion.div 
          className="contact-info"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Contact Information</h2>
          <div className="info-item">
            <FaMapMarkerAlt />
            <span>Bhubaneswar, Odisha, India</span>
          </div>
          <div className="info-item">
            <FaPhone />
            <span>+91 7978982619</span>
          </div>
          <div className="info-item">
            <FaEnvelope />
            <span>rajkumarmohanty949@gmail.com</span>
          </div>
          
          <div className="scene-wrapper">
            <Canvas>
              <Scene />
            </Canvas>
          </div>
        </motion.div>
        
        <motion.div 
          className="contact-form-container"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="glassmorphism-form">
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </div>
              
              <motion.button 
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
