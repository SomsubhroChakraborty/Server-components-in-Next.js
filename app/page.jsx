//  "use client" // This is used to make server component as client component
//  import {useState,useEffect} from 'react'
 import Navbar from '@/public/Component/Navbar'

const Home = () => {
  
  console.log("hello")
  return (
    <div>
      <Navbar/>
      I am a component
    </div>
  )
}

export default Home