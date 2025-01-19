import React from 'react';
import DoctorCard from '../Components/DocorCard';
import doc1 from '../Images/Doctors/Doc1.jpg';
import doc2 from '../Images/Doctors/doc2.webp';
import doc3 from '../Images/Doctors/doc3.jpeg';
import doc4 from '../Images/Doctors/doc4.webp';
import doc5 from '../Images/Doctors/doc5.png';
import './ProfessionalHelp.css'; 

function ProfessionalHelp() {
  const doctors = [
    { name: 'Aman', fees: '1000 per hour', rating: '4', image: doc1, specialization: 'Psychologist' },
    { name: 'Dr. Rahul', fees: '800 per hour', rating: '5', image: doc5, specialization: 'Psychiatrist' },
    { name: 'Dr. Neha', fees: '950 per hour', rating: '4', image: doc3, specialization: 'Counselor' },
    { name: 'Dr. Priya', fees: '1100 per hour', rating: '3', image: doc4, specialization: 'Therapist' },
    { name: 'Dr. Sameer', fees: '900 per hour', rating: '4', image: doc2, specialization: 'Clinical Psychologist' },
    { name: 'Dr. Aisha', fees: '850 per hour', rating: '3', image: doc4, specialization: 'Child Psychologist' },
    { name: 'Dr. Kabir', fees: '950 per hour', rating: '4', image: doc5, specialization: 'Family Therapist' },
    { name: 'Dr. Meena', fees: '1000 per hour', rating: '5', image: doc3, specialization: 'Cognitive Behavioral Therapist' },
    { name: 'Dr. Ali', fees: '1200 per hour', rating: '3', image: doc1, specialization: 'Neuropsychologist' }
  ];
  

  return (
    <div className="professional-help-container">
      {doctors.map((doctor, index) => (
        <DoctorCard 
          key={index}
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
