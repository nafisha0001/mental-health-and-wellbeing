import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ArtOpenPage.css"; // Custom styles for the ArtOpen page

const ArtOpenPage = () => {
  const { id } = useParams();
  const [art, setArt] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArt = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/art/${id}`); // Adjust API URL if needed
        if (!response.ok) {
          throw new Error("Art not found");
        }
        const data = await response.json();
        setArt(data);
      } catch (error) {
        console.error("Error fetching art:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArt();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!art) {
    return <div className="error">Art not found</div>;
  }

  return (
    <div className="art-open-page">
      <img src={art.image} alt={art.title} className="art-open-image" />
      <p className="motivational-quote">{art.motivationalQuote}</p>
    </div>
  );
};

export default ArtOpenPage;
