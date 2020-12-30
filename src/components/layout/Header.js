import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>To-Do Application</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
    </header>
  )
}

const headerStyle = {
  background: '#000000',
  color: '#ffffff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#ffffff',
  textDecoration: 'none'
}

export default Header;