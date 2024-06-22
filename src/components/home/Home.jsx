import React from 'react'
import homecss from '../home/Home.module.css'
const Home = () => {
  return (
    <div>
        <h1 className={homecss.heading}>Home</h1>
        <p>This is the home page</p>
    </div>
  )
}

export default Home