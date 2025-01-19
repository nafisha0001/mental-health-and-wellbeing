import React from 'react';
import WorkshopCard from '../Components/WorkshopCard';
import personBack from '../Images/workshops/personBack.avif';
import personEating from '../Images/workshops/pesonEating.jpg';
import artTherapy from '../Images/workshops/art therapy.jpg';
import angerManagement from '../Images/workshops/Anger management.jpeg';
import digitalDetox from '../Images/workshops/digital detox';
import nutritionAndMentalHealth from '../Images/workshops/Nutrition and mental health.png';
import './Workshop.css';

function Workshops() {
  const workshopDetails = [
    { 
      title: "The Art of Letting Go", 
      price: "Rs. 500", 
      date: "Tuesday, Mar 22, 5:00 PM", 
      image: personBack,
      description: "Discover the healing power of letting go in this transformative workshop. Through guided practices, participants will learn to release emotional baggage, cope with change, and find peace. Ideal for those looking to overcome past experiences and embrace the present."
    },
    { 
      title: "Mindful Eating", 
      price: "Rs. 300", 
      date: "Wednesday, Mar 29, 4:00 PM", 
      image: personEating,
      description: "Learn to develop a healthy relationship with food through mindfulness. This workshop will guide you through techniques to eat with intention, listen to your body, and enjoy every bite. Perfect for anyone looking to improve their eating habits and overall well-being."
    },
    { 
      title: "Art Therapy", 
      price: "Rs. 400", 
      date: "Tuesday, Oct 22, 5:00 PM", 
      image: artTherapy,
      description: "Explore the therapeutic benefits of creative expression in this Art Therapy workshop. Participants will use various art techniques to process emotions and develop new perspectives on challenges they face. No artistic skill required, just an open mind."
    },
    { 
      title: "Anger Management", 
      price: "Rs. 800", 
      date: "Sunday, Mar 22, 2:00 PM", 
      image: angerManagement,
      description: "Learn to control and channel anger effectively in this anger management session. Through practical exercises and insights, you'll gain techniques to handle anger constructively, reduce stress, and improve relationships. A must-attend for anyone struggling with emotional regulation."
    },
    { 
      title: "Digital Detox", 
      price: "Rs. 700", 
      date: "Monday, April 02, 5:00 PM", 
      image: digitalDetox,
      description: "Reclaim your time and focus with this Digital Detox workshop. Designed to help participants reduce their reliance on technology, this session includes strategies for balancing screen time, reconnecting with the present moment, and cultivating a healthier relationship with digital devices."
    },
    { 
      title: "Nutrition & Mental Health", 
      price: "Rs. 1000", 
      date: "Saturday, June 14, 7:00 PM", 
      image: nutritionAndMentalHealth,
      description: "Understand the link between what you eat and how you feel in this comprehensive workshop. Learn how specific nutrients affect mood and mental well-being, and get practical tips on integrating brain-boosting foods into your diet for long-term mental health benefits."
    },
    { 
      title: "The Art of Letting Go", 
      price: "Rs. 500", 
      date: "Tuesday, Mar 22, 5:00 PM", 
      image: personBack,
      description: "Discover the healing power of letting go in this transformative workshop. Through guided practices, participants will learn to release emotional baggage, cope with change, and find peace. Ideal for those looking to overcome past experiences and embrace the present."
    },
    { 
      title: "Mindful Eating", 
      price: "Rs. 300", 
      date: "Wednesday, Mar 29, 4:00 PM", 
      image: personEating,
      description: "Learn to develop a healthy relationship with food through mindfulness. This workshop will guide you through techniques to eat with intention, listen to your body, and enjoy every bite. Perfect for anyone looking to improve their eating habits and overall well-being."
    },
    { 
      title: "Art Therapy", 
      price: "Rs. 400", 
      date: "Tuesday, Oct 22, 5:00 PM", 
      image: artTherapy,
      description: "Explore the therapeutic benefits of creative expression in this Art Therapy workshop. Participants will use various art techniques to process emotions and develop new perspectives on challenges they face. No artistic skill required, just an open mind."
    }
  ];
  

  return (
    <div className="workshop-grid-container">
      {workshopDetails.map((workshop, index) => (
        <WorkshopCard
          key={index}
          title={workshop.title}
          price={workshop.price}
          date={workshop.date}
          image={workshop.image}
          description={workshop.description}
        />
      ))}
    </div>
  );
}

export default Workshops;
