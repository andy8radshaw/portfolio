import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectCard({ name, mainImage, isLightMode } ) {
  return (
    <Link to ={`portfolio/${name}`} className="column is-one-third-desktop is-half-tablet">
      <div className="card project-card">
        <div className="card-image">
          <figure className="image is-4by3 main-image">
            <img src={mainImage} alt={`${name}`} />
          </figure>
        </div>
        <div className={isLightMode ? 'card-content has-text-centered has-background-danger' : 'card-content has-text-centered has-background-success has-text-light'}>
          <p>{name}</p>
        </div>
      </div>
    </Link>

  )
}