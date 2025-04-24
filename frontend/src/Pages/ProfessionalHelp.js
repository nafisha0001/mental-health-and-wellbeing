import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DoctorCard from '../Components/DocorCard';
import './ProfessionalHelp.css';

function ProfessionalHelp() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/doctors')
      .then(response => setDoctors(response.data))
      .catch(error => console.error('Error fetching doctors:', error));
  }, []);

  return (
    <div className="professional-help-container">
      {doctors.map((doctor) => (
        <DoctorCard 
          key={doctor._id}
          specialization={doctor.specialization}
          name={doctor.name}
          fees={doctor.fees}
          rating={doctor.rating}
          image={doctor.image}
        />
      ))}
    </div>
  );
}

export default ProfessionalHelp;
