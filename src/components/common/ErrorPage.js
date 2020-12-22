/* eslint-disable react/no-unescaped-entities */
import React from 'react'

export default function ErrorPage({ isLightMode }) {
  return (
    <section className={isLightMode ? 'hero is-light is-fullheight-with-navbar' : 'hero is-dark is-fullheight-with-navbar'}>
      <div className="hero-body">
        <div className="container">
          <p className="title">
            Oops... looks like you're lost
          </p>
        </div>
      </div>
    </section>
  )
}