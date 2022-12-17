import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { API_SEARCH_FILM } from '../../API/API';

const Movie = () => {
  const [arrFilm, setArrFilm] = useState([]);
  const [filterValue, setFiltrValue] = useState('');
  const [filmName, setFilmName] = useState('');
  const [searchParams, setSearchParams] = useSearchParams('post');

  useEffect(() => {
    const q = searchParams.get('q');
    JSON.stringify(localStorage.setItem('prevUrl', window.location.href));
    if (q === '' && filmName === '') {
      setArrFilm([]);
    }
    if (filmName !== '' && !q) {
      API_SEARCH_FILM(filmName).then(resp => {
        setArrFilm(resp.data.results);
      });
    }
    if (q) {
      API_SEARCH_FILM(q).then(resp => {
        setArrFilm(resp.data.results);
      });
    }
    console.log(q);
  }, [filmName, searchParams]);

  const changeValue = event => {
    setFiltrValue(event.target.value);
  };
  const formSubit = event => {
    event.preventDefault();
    setFilmName(filterValue);
    setSearchParams({ q: filterValue });
  };

  return (
    <>
      <form action="" onSubmit={formSubit}>
        <input value={filterValue} type="text" onChange={changeValue} />
        <button>Search</button>
      </form>
      {arrFilm.map(films => {
        return (
          <li key={films.id}>
            <Link to={`${films.id}`}> {films.original_title}</Link>
          </li>
        );
      })}
    </>
  );
};

export default Movie;
