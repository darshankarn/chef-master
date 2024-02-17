import React from 'react'
import Header from './Header'
import ReciprList from './RecipeList'
import Footer from './Footer'

function Home() {
  return (
    <div className='home'>
        <Header/>
        <ReciprList/>
        <Footer/>
    </div>
  )
}

export default Home