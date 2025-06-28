import { motion } from 'framer-motion';
import VerticalNavbar from '../components/VerticalNavbar';
import InternshipCard from '../components/InternshipCard';
import internships from '../data/dataInternships'; 
import '../styles/InternshipCard.css'; 
import './WebDevelopment.css';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const WebDevelopment = () => {
  return (
    <>
      <VerticalNavbar />
      <motion.div
        className="page-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1>Web Development Internships</h1>
        <p>Find internships in React, Node, HTML, CSS and more.</p>

        {internships.map((item, index) => (
          <InternshipCard
            key={index}
            title={item.title}
            company={item.company}
            location={item.location}
          />
        ))}
      </motion.div>
    </>
  );
};

export default WebDevelopment;
