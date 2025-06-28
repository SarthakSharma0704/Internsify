import VerticalNavbar from '../components/VerticalNavbar';
import './Home.css';

const Home = () => {
  return (
    <>
      <VerticalNavbar />
      <div className="page-content">
        <h1>Welcome to Internsify</h1>
        <p>Your one-stop internship portal for all domains.</p>
      </div>
    </>
  );
};

export default Home;
