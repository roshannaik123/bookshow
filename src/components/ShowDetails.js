import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ShowDeatils.css';

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [Book ,setBook]=useState("Book ticket");

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data));
  }, [id]);

  const handleBookTicket = () => {
    setBook((prevStatus)=>prevStatus==="Book ticket" ? 'Booked':'Book ticket');
   };

  return (
    <div className='show-details'>
      {show ? (
        <div>
          <h1>{show.name}</h1>
          <p>{show.summary}</p>
          {show.rating && <p>Average Rating: {show.rating.average}</p>}
          <button onClick={handleBookTicket}>{Book}</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ShowDetails;
