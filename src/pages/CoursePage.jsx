import VerticalNavbar from '../components/VerticalNavbar';
import './CoursePage.css';

const CoursePage = () => {
  return (
    <>
      <VerticalNavbar />
      <div className="page-content">
        <h1>All Internship Courses</h1>
        <p>Explore various fields and find internships that match your skills.</p>

        <div className="course-grid">
          <div className="course-card">
            <h2>Web Development</h2>
            <p>Learn HTML, CSS, JavaScript, React, and build real projects.</p>
          </div>

          <div className="course-card">
            <h2>Data Science</h2>
            <p>Analyze data using Python, Machine Learning, and tools like Pandas.</p>
          </div>

          <div className="course-card">
            <h2>Design</h2>
            <p>Explore UI/UX principles, Figma, and design modern interfaces.</p>
          </div>

          <div className="course-card">
            <h2>Cyber Security</h2>
            <p>Learn ethical hacking, network security, and penetration testing.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursePage;
