import { Link, useParams, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { API_GET_FILM_BY_ID } from '../../API/API';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState('');

  const [genres, setGenres] = useState([]);
  useEffect(() => {
    API_GET_FILM_BY_ID(movieId).then(resp => {
      setFilm(resp.data);
      setGenres(resp.data.genres);
    });
  }, []);

  const { title, vote_average, overview, poster_path } = film;

  const baseImgUrl = 'https://image.tmdb.org/t/p/w500';

  const clickGoBack = () => {
    window.history.pushState({}, '', localStorage.getItem('prevUrl'));
    window.location = window.location.href;
  };

  return (
    <div className="conteinerMovie">
      <button onClick={clickGoBack}>
        <Link>Go Back</Link>
      </button>
      <img src={`${baseImgUrl}${poster_path}`} alt="" />
      <div className="aboutFilm">
        <h2>{title}</h2>
        <p>User Score: {vote_average}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        {genres.map(({ id, name }) => {
          return <p key={id}>{name}</p>;
        })}
      </div>
      <div className="conteinerMoreInfo">
        <p>Additional information</p>
        <ul>
          <li>
            <Link to={'cast '}>Cast</Link>
          </li>
          <li>
            <Link to={'reviews'}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
