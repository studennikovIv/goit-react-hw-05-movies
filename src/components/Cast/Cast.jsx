import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { API_GET_CAST } from '../../API/API';
const baseImgUrl = 'https://image.tmdb.org/t/p/w500';
const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    API_GET_CAST(movieId).then(resp => {
      setCast(resp.data.cast);
    });
  }, []);
  return (
    <>
      <ul>
        {cast.map(({ name, id, character, profile_path }) => {
          return (
            <li key={id}>
              <img src={`${baseImgUrl}${profile_path}`} alt="" />
              <p>{name}</p>
              <span>Character: {character} </span>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Cast;
