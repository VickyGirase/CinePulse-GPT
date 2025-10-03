import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Tvshow from './components/Tvshow'
import Movies from './components/Movies'
import People from './components/People'
import { Provider } from 'react-redux'
import { store } from './store/store'
import MovieDetails from './hooks/useMovieDetails'
import TvDetails from './hooks/useTvDetails'
import PersonDetails from './hooks/usePersonDetails'
import Trailer from './hooks/useTrailer'
import About from './components/About'
import Contact from './components/Contact'


const App = () => {

  

  return (

    <Provider store={store}>
        <BrowserRouter>
        <Routes>
          
          
    <Route path='/' element={<Main />} />
         <Route path='/trending' element={<Trending />} />
         <Route path='/popular' element={<Popular />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movie/details/:id' element={<MovieDetails />}>
          <Route path='/movie/details/:id/trailer' element={<Trailer />} />
          </Route>
          <Route path='/tvshow' element={<Tvshow />} />
          <Route path='/tv/details/:id' element={<TvDetails />}>
          <Route path='/tv/details/:id/trailer' element={<Trailer />} />
          </Route>
          <Route path='/people' element={<People />} />
          <Route path='/person/details/:id' element={<PersonDetails />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
  </Routes>
    
    </BrowserRouter>
  </Provider>
   
  )
}

export default App

