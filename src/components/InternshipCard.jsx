import React from 'react';
import { motion } from 'framer-motion';
import '../styles/InternshipCard.css';

const InternshipCard = ({ title, company, location }) => {
  return (
    <motion.div
      className="internship-card"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <h3>{title}</h3>
      <p><strong>Company:</strong> {company}</p>
      <p><strong>Location:</strong> {location}</p>
      <button>Apply Now</button>
    </motion.div>
  );
};

export default InternshipCard;
