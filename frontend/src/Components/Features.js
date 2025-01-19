import React from 'react';
import Card from './Card'; 
import './Features.css';
import yoga from '../Images/Yoga.jpg';
import Library from '../Images/Library.png';
import brethe from '../Images/breathe.jpg'
import cartoons from '../Images/cartoons.jpg'

function Features() {
    return (
        <div className="features">
            <Card 
                title="Mindful Movement"
                description="Practice yoga and simple exercises daily to reduce stress, improve mental clarity, and boost overall health."
                imageUrl={yoga}
                target= '/mindful-movement'
            />
            <Card 
                title="Wellness Library"
                description="Explore our collection of blogs, article, podcasts and books. Whether you're looking to learn, laugh, or unwind."
                imageUrl={Library}
                target= '/wellness-library-books'
            />
            <Card 
                title="Meditation & Breathing"
                description="Let each breath bring you closer to a state of calm, clarity, and well-being."
                imageUrl={brethe}
                target= '/meditation'
            />
            <Card 
                title="Creative Therapy"
                description="Explore joy with cartoons, find inspiration in art videos, and let music soothe your soul."
                imageUrl={cartoons}
                target= '/creative-theraphy-page-cartoon'
            />
        </div>
    );
}

export default Features;
