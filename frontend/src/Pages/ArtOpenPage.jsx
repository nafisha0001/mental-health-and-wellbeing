// ArtOpenPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './ArtOpenPage.css'; // Custom styles for the ArtOpen page

const artsData = [
    {
      id: 1,
      title: 'Inspiration Art 1',
      image: require('../Images/ArtGallary/image 122.png'),
      motivationalQuote: 'Believe in yourself and all that you are.',
    },
    {
      id: 2,
      title: 'Inspiration Art 2',
      image:  require('../Images/ArtGallary/image 122.png'),
      motivationalQuote: 'Every day is a second chance.',
    },
    {
      id: 3,
      title: 'Inspiration Art 3',
      image:  require('../Images/ArtGallary/image 122.png'),
      motivationalQuote: 'You are capable of amazing things.',
    },
    {
      id: 4,
      title: 'Inspiration Art 4',
      image:  require('../Images/ArtGallary/image 122.png'),
      motivationalQuote: 'Dream big and dare to fail.',
    },
    {
      id: 5,
      title: 'Inspiration Art 5',
      image:  require('../Images/ArtGallary/image 122.png'),
      motivationalQuote: 'Keep going, no matter what.',
    },
    {
      id: 6,
      title: 'Inspiration Art 6',
      image: require('../Images/ArtGallary/image 122.png'),
      motivationalQuote: 'Success is a journey, not a destination.',
    },
    {
      id: 7,
      title: 'Inspiration Art 7',
      image: 'path-to-image-7.jpg',
      motivationalQuote: 'The harder you work, the luckier you get.',
    },
    {
      id: 8,
      title: 'Inspiration Art 8',
      image: 'path-to-image-8.jpg',
      motivationalQuote: 'Stay positive, work hard, make it happen.',
    },
    {
      id: 9,
      title: 'Inspiration Art 9',
      image: 'path-to-image-9.jpg',
      motivationalQuote: 'You are stronger than you think.',
    },
  ];

const ArtOpenPage = () => {
  const { id } = useParams();
  const art = artsData.find((item) => item.id === parseInt(id));

  return (
    <div className="art-open-page">
      
      <img src={art.image} alt={art.title} className="art-open-image" />
      <p className="motivational-quote">{art.motivationalQuote}</p>
    </div>
  );
};

export default ArtOpenPage;
