import { Link } from 'react-router-dom';
import './VerticalNavbar.css';

const VerticalNavbar = () => {
  return (
    <div className="vertical-navbar">
      <h2>Internsify</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/web-development">Web Dev</Link>
        <Link to="/data-science">Data Science</Link>
        <Link to="/design">Design</Link>
      </nav>
    </div>
  );
};

export default VerticalNavbar;
