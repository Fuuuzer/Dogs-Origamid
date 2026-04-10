import React from 'react'
import { NavLink } from 'react-router'

const UserHeaderNav = () => {
  return (
    <nav>
      <NavLink to='/conta'>Minhas Fotos</NavLink>
      <NavLink to='/conta/estatisticas'>Estatísticas</NavLink>
      <NavLink to='/conta/postar'>Adicionar foto</NavLink>
      <button>Sair</button>
    </nav>
  )
}

export default UserHeaderNav