import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = ({ modifRapoarte, setModifRapoarte }) => {
  const stil = {
    listaConcerte: {
      textDecoration: 'none',
    },
    formular: {
      textDecoration: 'none',
      marginLeft: '30px',
    },
    rapoarte: {
      textDecoration: 'none',
      marginLeft: '30px',
    },
  }
  return (
    <div className="nav">
      <div className="navbar">
        <NavLink
          style={stil.listaConcerte}
          to="/"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Lista Concerte
        </NavLink>
        <NavLink
          style={stil.formular}
          to="/formular"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Formular
        </NavLink>
        <NavLink
          to="/rapoarte_asociatie"
          style={stil.rapoarte}
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          onClick={() => {
            setModifRapoarte(!modifRapoarte)
          }}
        >
          Rapoarte asociatie
        </NavLink>
      </div>
    </div>
  )
}

export default Nav
