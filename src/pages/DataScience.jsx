import VerticalNavbar from '../components/VerticalNavbar';
import InternshipCard from '../components/InternshipCard';
import '../styles/InternshipCard.css';
import './DataScience.css';

const dataScienceInternships = [
  {
    title: 'Data Analyst Intern',
    company: 'Insight AI',
    location: 'Remote',
  },
  {
    title: 'Machine Learning Intern',
    company: 'NeuronX',
    location: 'Hyderabad',
  },
  {
    title: 'Data Science Research Intern',
    company: 'Quantify Inc.',
    location: 'Pune',
  },
];

const DataScience = () => {
  return (
    <>
      <VerticalNavbar />
      <div className="page-content">
        <h1>Data Science Internships</h1>
        <p>Explore top roles in AI, Machine Learning, and Data Analysis.</p>

        {dataScienceInternships.map((item, index) => (
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

export default DataScience;
