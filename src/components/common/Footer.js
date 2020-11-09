import React from 'react'

export default function Footer({ isLightMode }) {
  console.log(isLightMode)
  return (
    <footer className={isLightMode ? 'footer is-fixed-bottom' : 'footer is-warning is-fixed-bottom has-background-dark'}>
      <div className={isLightMode ? 'content has-text-centered' : 'content has-text-centered has-text-light'}>
        <p>© Andy Bradshaw</p>
      </div>
    </footer>
  )
}