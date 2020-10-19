import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectCard({ name, mainImage, id }) {
  return (
    <Link to ={`portfolio/${name}`} className="column is-one-third-desktop is-half-tablet">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3 main-image">
            <img src={mainImage} alt={`${name} image`} />
          </figure>
        </div>
        <div className="card-content has-text-centered">
          <p>{name}</p>
        </div>
      </div>
    </Link>

  )
}