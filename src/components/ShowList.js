import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ShowList.css'; 

const truncateWords = (text,numWords) => {
  const words = text.split(' ');
  return words.slice(0,50).join(' ') + '...';
};

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);

  return (
    

    <div className="show-list-container">
     
      {shows.map((show) => (
        <div className="show-card" key={show.show.id}>
          <h2>{show.show.name}</h2>
          
          <p>{truncateWords(show.show.summary, 100)}</p>
          {show.show.rating && <p>Average Rating: {show.show.rating.average}</p>}
          <Link to={`/show/${show.show.id}`}>Show Details</Link>
        </div>
      ))}
    </div>
    
  );
};

export default ShowList;
