// MovieDataContext.js
import React, { createContext, useContext, useState } from 'react';
import movieData from './movieData';

const MovieDataContext = createContext();

export const useMovieData = () => useContext(MovieDataContext);

export const MovieDataProvider = ({ children }) => {
  const [movies] = useState(movieData);

  return (
    <MovieDataContext.Provider value={movies}>
      {children}
    </MovieDataContext.Provider>
  );
};
