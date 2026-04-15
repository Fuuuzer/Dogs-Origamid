import React from 'react'
import { NavLink } from 'react-router'
import { UserContext } from '../../UserContext'
import styles from './UserHeaderNav.module.css'
import MinhasFotos from '../../assets/feed.svg?react'
import Estatisticas from '../../assets/estatisticas.svg?react'
import AdicionarFoto from '../../assets/adicionar.svg?react'
import Sair from '../../assets/sair.svg?react'


const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext)
  return (
    <nav className={styles.nav}>
      <NavLink to='/conta'><MinhasFotos />Minhas fotos</NavLink>
      <NavLink to='/conta/estatisticas'><Estatisticas />Estatisticas</NavLink>
      <NavLink to='/conta/postar'><AdicionarFoto />Adicionar Foto</NavLink>
      <button onClick={userLogout}><Sair />Sair</button>
    </nav>
  )
}

export default UserHeaderNav