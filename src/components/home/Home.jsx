import React from 'react'
import homecss from '../home/Home.module.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <section>
      <section className={homecss.sec1}>
          <h1>BUJO</h1>
      </section>
      <section className={homecss.sec2}>
        <h1>start adding tasks</h1>
        <button className={homecss.sec2btn}><Link to="/components/Tasks">add tasks</Link></button>
      </section>
      <section className={homecss.sec3}>

      </section>
      <footer>  </footer>
    </section>
  )
}
export default Home