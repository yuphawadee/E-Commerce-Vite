import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import SlideNav from '../components/SlideNav/SlideNav'
import NewArrival from '../components/NewArrival/NewArrival'

const Home = () => {
  return (
    <div>
      <Hero />
      <div className='max-w-[1400px] m-auto px-5'>
        <NewArrival />
        <Popular />
      </div >
    </div>
  )
}

export default Home