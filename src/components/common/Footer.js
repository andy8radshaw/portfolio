import React from 'react'

export default function Footer({ isLightMode }) {
  return (
    <footer className={isLightMode ? 'footer' : 'footer is-warning has-background-dark is-align-self-flex-end'}>
      <div className={isLightMode ? 'content has-text-centered' : 'content has-text-centered has-text-light'}>
        <p>© Andy Bradshaw 2021</p>
      </div>
    </footer>
  )
}