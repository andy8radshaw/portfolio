import React from 'react'

export default function ProjectCard({ projectName, projectImage, imageAltText }) {
  return (
    <div className="column is-one-third-desktop is-half-tablet">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={projectImage} alt={imageAltText} />
          </figure>
        </div>
        <div className="card-content has-text-centered">
          <p>{projectName}</p>
        </div>
      </div>
    </div>

  )
}