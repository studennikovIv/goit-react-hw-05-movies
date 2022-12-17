import { Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.module.css';
import Home from './page/Home/Home';
import Movie from './page/Movie/Movie';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Cast from './components/Cast/Cast.jsx';
import Reviews from './components/Reviews/Reviews.jsx';
export const App = () => {
  useEffect(() => {
    JSON.stringify(localStorage.setItem('prevUrl', window.location.href));
  });
  return (
    <>
      <header className="header">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movie">Movie</Link>
        </nav>
      </header>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />

          <Route path="/movie/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};
