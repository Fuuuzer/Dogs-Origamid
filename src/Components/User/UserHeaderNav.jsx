import React from 'react'
import { NavLink, useNavigate } from 'react-router'
import { UserContext } from '../../UserContext'
import styles from './UserHeaderNav.module.css'
import MinhasFotos from '../../assets/feed.svg?react'
import Estatisticas from '../../assets/estatisticas.svg?react'
import AdicionarFoto from '../../assets/adicionar.svg?react'
import Sair from '../../assets/sair.svg?react'


const UserHeaderNav = () => {
  const navigate = useNavigate();
  const [mobile, setMobile] = React.useState(null)
  const { userLogout } = React.useContext(UserContext);

  function handleLogout() {
    userLogout();
    navigate('/login')
  }

  return (
    <nav className={styles.nav}>
      <NavLink to='/conta' end>
        <MinhasFotos />
        {mobile && 'Minhas fotos'}
      </NavLink>
      <NavLink to='/conta/estatisticas'>
        <Estatisticas />
        {mobile && 'Estatisticas'}
      </NavLink>
      <NavLink to='/conta/postar'>
        <AdicionarFoto />
        {mobile && 'Adicionar Foto'}
      </NavLink>
      <button onClick={handleLogout}><Sair />
        {mobile && 'Sair'}
      </button>
    </nav>
  )
}

export default UserHeaderNav