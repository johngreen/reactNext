import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/roster'>Roster</Link></li>
        <li><Link to='/schedule'>Schedule</Link></li>
        <li><Link to='/stink'>Stink</Link></li>
        <li><Link to='/account'>Account</Link></li>
        <li><Link to='/semantic'>Semanatic test</Link></li>
        <li><Link to='/next'>Next</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
