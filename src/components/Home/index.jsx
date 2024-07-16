import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'
const Home = () => {
  return (
    <div className={`${styles.main}`}>
      <h1>Links of all the screen</h1>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/loginSuccess">Login Success</Link>
      <Link to="/trackScreen">Track Screen</Link>
    </div>
  )
}

export default Home;
