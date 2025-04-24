const mongoose = require('mongoose');
// const Doctor = require('./models/Doctor');
const Art = require('./models/Art');

mongoose.connect('mongodb://localhost:27017/userdata', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('MongoDB Connected');
    seedDB();
  }).catch(err => console.error('MongoDB Connection Error:', err));

  
  const artData = [
    { title: 'Inspiration Art 1', image: '/images/art1.png', motivationalQuote: 'Believe in yourself and all that you are.' },
    { title: 'Inspiration Art 2', image: '/images/art2.png', motivationalQuote: 'Every day is a second chance.' },
    { title: 'Inspiration Art 3', image: '/images/art3.png', motivationalQuote: 'You are capable of amazing things.' }
  ];
  
  const seedDB = async () => {
    try {
      await Art.deleteMany();
      await Art.insertMany(artData);
      console.log('Database Seeded Successfully');
      mongoose.connection.close();
    } catch (error) {
      console.error('Seeding Error:', error);
      mongoose.connection.close();
    }
  };
  
  seedDB();
  