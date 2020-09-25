import React from 'react'
import './Header.css'

import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'
import IconButton from '@material-ui/core/IconButton'

const Header = () => {
  return (
    <header>
      <IconButton>
        <PersonIcon className="header__icon" fontSize="large" />
      </IconButton>

      <img
        src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
        alt="Tinder Logo"
        className="header__logo"
      />

      <IconButton>
        <ForumIcon className="header__icon" fontSize="large" />
      </IconButton>
    </header>
  )
}

export default Header
