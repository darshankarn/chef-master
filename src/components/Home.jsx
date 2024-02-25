import React from 'react'
import Header from './Header'
import ReciprList from './RecipeList'
import Footer from './Footer'
import "../Styles/home.css"
import RecipeCard from './RecipeCard'

function Home() {
  return (
    <div className='home'>
        <Header/>
        <RecipeCard/>
        <ReciprList/>
        <Footer/>
    </div>
  )
}

export default Home