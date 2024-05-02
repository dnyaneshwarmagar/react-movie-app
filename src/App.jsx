import { useState } from 'react'
import {movies,genres} from './components/data'
import './App.css'
import MovieList from './components/MovieList';
import GenreFilter from './components/GenreFilter';

function App() {
  const [moviesData,setMoviesData] = useState([...movies]);

  return (
    <div className='main'>
      <h1 className='first_font'>Top 15 Movies of All Time</h1>
      <GenreFilter genres={genres} movies={movies} setMoviesData={setMoviesData}/>
      <MovieList moviesData={moviesData}/>
    </div>
  )
}

export default App
