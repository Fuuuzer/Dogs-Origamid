import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className={styles.header}>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  )
}

export default Header