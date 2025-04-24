// // // src/pages/FullArticle.js
// // import React from 'react';
// // import { useParams } from 'react-router-dom';
// // import { articlesData } from '../Data/articlesData';
// // import './FullArticle.css'; // Add CSS for styling the full article page
// // import ReactMarkdown from 'react-markdown';

// // const FullArticle = () => {
// //   const { id } = useParams();
// //   const article = articlesData.find((art) => art.id === parseInt(id));

// //   return (
// //     <div className="full-article-page">
// //       <h1>{article.title}</h1>
      
// //       <p><ReactMarkdown>{article.fullText}</ReactMarkdown></p>
   
// //       <div className="feedback-section">
// //         <textarea placeholder="Your feedback..." className="feedback-input"></textarea>
// //         <button className="submit-feedback-btn">Submit Feedback</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FullArticle;
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import ReactMarkdown from 'react-markdown';
// import './FullArticle.css';

// const FullArticle = () => {
//   const { id } = useParams(); // Get article ID from URL
//   const [article, setArticle] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchArticle = async () => {
//       try {
//         const response = await fetch(`http://localhost:5000/api/articles/${id}`);
//         if (!response.ok) throw new Error('Failed to fetch article');
        
//         const data = await response.json();
//         setArticle(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchArticle();
//   }, [id]);

//   if (loading) return <p>Loading article...</p>;
//   if (error) return <p>Error: {error}</p>;
//   if (!article) return <p>Article not found.</p>;

//   return (
//     <div className="full-article-page">
//       <h1>{article.title}</h1>
//       <img src={article.imageUrl} alt={article.title} className="article-image" />
      
//       <div className="article-content">
//         <ReactMarkdown>{article.fullText}</ReactMarkdown>
//       </div>

//       <div className="feedback-section">
//         <textarea placeholder="Your feedback..." className="feedback-input"></textarea>
//         <button className="submit-feedback-btn">Submit Feedback</button>
//       </div>
//     </div>
//   );
// };

// export default FullArticle;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const FullArticle = () => {
  const { id } = useParams(); // Get article ID from URL
  console.log("Article ID:", id); // Debugging

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return; // Prevents fetching if id is undefined

    const fetchArticle = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/articles/${id}`);
        if (!response.ok) throw new Error('Failed to fetch article');

        const data = await response.json();
        setArticle(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) return <p>Loading article...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!article) return <p>Article not found.</p>;

  return (
    <div className="full-article-page">
      <h1>{article.title}</h1>
      <img src={article.imageUrl} alt={article.title} className="article-image" />
      <ReactMarkdown>{article.fullText}</ReactMarkdown>
    </div>
  );
};

export default FullArticle;
