import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_TOP_FILM } from '../../API/API';

const Home = () => {
  const [arrFilm, setArrFilm] = useState([]);
  JSON.stringify(localStorage.setItem('prevUrl', window.location.href));
  useEffect(() => {
    API_TOP_FILM().then(resp => {
      setArrFilm(resp.data.results);
    });
  }, []);

  return (
    <ul>
      {arrFilm.map(({ original_title, id }) => {
        return (
          <li key={id}>
            <Link to={`movie/${id}`}>{original_title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Home;
