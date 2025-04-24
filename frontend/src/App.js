import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import Workshops from './Pages/Workshops';
import ProfessionalHelp from './Pages/ProfessionalHelp';
import MindfulMovement from './Pages/MindfulMovement';
import AboutUs from './Pages/AboutUs';
// import ProfessionalHelp from './Pages/ProfessionalHelp';
// import AboutUs from './Pages/AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import BooksPage from './Pages/BooksPage';


// import VideoPlay from './Pages/VideoPlayer';

import VideosPage from './Pages/VideosPage';
import VideoPlayer from './Pages/VideoPlayer'; 

import MindfulMovement2 from './Pages/MindfulMovement2';
import YogaDescription from './Pages/YogaDescription';
import ExerciseDescription from './Pages/EcerciseDescription';


import ArticlePage from './Pages/ArticlePage';
import FullArticle from './Pages/FullArticle';
import CreativeTherapy1 from './Pages/CreativeTherapy1';
import CreativeTherapyVideoPlayer from './Pages/CreativeTherapyVideoPlayer';
import MusicPlayer from './Pages/MusicPlayer';
import Music from './Pages/Music';
import ArtPage from './Pages/ArtPage';

import ArtOpenPage from './Pages/ArtOpenPage';




// import ArticlePage from './Pages/ArticlePage';
// import FullArticle from './Pages/FullArticle';
import Meditation from './Pages/Meditation';
import CalmBreating from './Pages/CalmBreathing';
import MeditationVideo from './Pages/MeditationVideo';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/professional-help" element={<ProfessionalHelp />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/mindful-movement" element={<MindfulMovement />} />
        <Route path="/wellness-library-books" element={<BooksPage />} />
        <Route path="/wellness-library-videos" element={<VideosPage/>} />
        <Route path="/video/:id" element={<VideoPlayer />} />

        <Route path="/wellness-library-article" element={<ArticlePage/>} />
        <Route path="/mindful-movement" element={<MindfulMovement/>} />
        <Route path="/mindful-movement-2" element={<MindfulMovement2/>} />
        <Route path="/yoga-description" element={<YogaDescription/>} />
        <Route path="/exercise-description" element={<ExerciseDescription/>} />


        
        {/* <Route path="/articles" element={<ArticlePage />} />
        <Route path="/article/:id" element={<FullArticle />} /> */}
        <Route path="/creative-theraphy-page-cartoon" element={<CreativeTherapy1/>} />
        <Route path="/creative-theraphy-video-player" element={<CreativeTherapyVideoPlayer/>} />
        <Route path="/creative-theraphy-page-music-player" element={<MusicPlayer/>} />
        <Route path="/creative-theraphy-page-music" element={<Music/>} />
        <Route path="/creative-theraphy-page-art" element={<ArtPage/>} />
        <Route path="/art/:id" element={<ArtOpenPage />} />
        



        <Route path="/meditation" element={<Meditation />} />
        <Route path="/calm-breathing" element={<CalmBreating />} />
        <Route path="/articles" element={<ArticlePage />} />
        <Route path="/articles/:id" element={<FullArticle />} />
        <Route path="/meditation-video/:id" element={<MeditationVideo />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
