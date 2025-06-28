import VerticalNavbar from '../components/VerticalNavbar';
import InternshipCard from '../components/InternshipCard';
import '../styles/InternshipCard.css';
import './Design.css';

const designInternships = [
  {
    title: 'UI/UX Intern',
    company: 'Pixel Labs',
    location: 'Remote',
  },
  {
    title: 'Graphic Designer Intern',
    company: 'Creatify Studio',
    location: 'Mumbai',
  },
  {
    title: 'Product Designer Intern',
    company: 'BrightIdeas Pvt Ltd',
    location: 'Delhi',
  },
];

const Design = () => {
  return (
    <>
      <VerticalNavbar />
      <div className="page-content">
        <h1>Design Internships</h1>
        <p>Browse internships in UI/UX, graphic design, and product design.</p>

        {designInternships.map((item, index) => (
          <InternshipCard
            key={index}
            title={item.title}
            company={item.company}
            location={item.location}
          />
        ))}
      </div>
    </>
  );
};

export default Design;
