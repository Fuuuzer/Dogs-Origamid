import React, { use } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router'
import { UserContext } from '../../UserContext'
import styles from './UserHeaderNav.module.css'
import MinhasFotos from '../../assets/feed.svg?react'
import Estatisticas from '../../assets/estatisticas.svg?react'
import AdicionarFoto from '../../assets/adicionar.svg?react'
import Sair from '../../assets/sair.svg?react'
import useMedia from '../../Hooks/useMedia'


const UserHeaderNav = () => {
  const navigate = useNavigate();
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false)

  const { pathname } = useLocation();
  console.log('mobile:', mobile);

  React.useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  function handleLogout() {
    userLogout();
    navigate('/login')
  }

  return (<>
    {mobile &&
      <button
        aria-label='Menu'
        className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
        onClick={() => setMobileMenu(!mobileMenu)}>

      </button>}

    <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
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
  </>
  )
}

export default UserHeaderNav