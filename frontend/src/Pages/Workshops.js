import React, { useEffect, useState } from 'react';
import WorkshopCard from '../Components/WorkshopCard';
import './Workshop.css';

function Workshops() {
  const [workshops, setWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/workshops');
        if (!response.ok) throw new Error('Failed to fetch workshops');

        const data = await response.json();
        setWorkshops(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkshops();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="workshop-grid-container">
      {workshops.map((workshop) => (
        <WorkshopCard
          key={workshop._id}
          title={workshop.title}
          price={workshop.price}
          date={workshop.date}
          imageURL={workshop.imageURL}
          description={workshop.description}
        />
      ))}
    </div>
  );
}

export default Workshops;
