import { useState } from 'react'
import './App.css'
import Movies from './components/Movies'
import MoviesContext from './context/MoviesContext'
import { useFetch } from './hooks/useFetch'
import Nav from './components/Nav'

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [url, setUrl] = useState(new URL('titles?list=top_boxoffice_200&limit=20', import.meta.env.VITE_MOVIES_API_BASE_URL)) //SET URL VALUES WITH URL METHODS

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_MOVIES_RAPIDAPI_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_MOVIES_RAPIDAPI_HOST
    }
  };

  const { data } = useFetch(url.toString(), options);

  return (
    <MoviesContext.Provider value={{ data, url, setUrl, currentPage, setCurrentPage }}>
      <Nav />
      <Movies />
    </MoviesContext.Provider>
  )
}

export default App
