import React from 'react'

export default function ScreenshotCard({ image }) {
  return (
    <div className="column is-one-quarter-desktop is-half-tablet">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt="Placeholder image" />
          </figure>
        </div>
      </div >
    </div>
  )
}