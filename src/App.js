import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import MovieList from './components/MoviList'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='movie/:id' element={<MovieDetail/>}/>
        <Route path='movies/:type' element={<MovieList/>}/>
        <Route path='/*' element={<h1>Error Page</h1>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
