import React, { useState, useEffect } from "react";
import UserFeedbackCard from "./UserFeedbackCard";
import "./UserFeedback.css";

const UserFeedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/feedbacks");
                const data = await response.json();
                setFeedbacks(data);
            } catch (error) {
                console.error("Error fetching feedbacks:", error);
            }
        };

        fetchFeedbacks();
    }, []);

    const nextFeedback = () => {
        setIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
    };

    const previousFeedback = () => {
        setIndex((prevIndex) => (prevIndex - 1 + feedbacks.length) % feedbacks.length);
    };

    if (feedbacks.length === 0) return <p>Loading feedbacks...</p>;

    return (
        <div className="feedback-container">
            <div className="feedback-cards-container">
                <UserFeedbackCard {...feedbacks[index % feedbacks.length]} />
                <UserFeedbackCard {...feedbacks[(index + 1) % feedbacks.length]} />
                <UserFeedbackCard {...feedbacks[(index + 2) % feedbacks.length]} />
            </div>
            <div>
                <button className="feedback-movement" onClick={previousFeedback}>&lt;</button>
                <button className="feedback-movement" onClick={nextFeedback}>&gt;</button>
            </div>
        </div>
    );
};

export default UserFeedback;
