import React, { useState } from 'react'
import ImageModal from './ImageModal'

export default function ScreenshotCard({ image }) {

  const [imageModalOpen, setImageModalOpen] = useState(false)

  const handleImageModal = () => {
    setImageModalOpen(!imageModalOpen)
  }

  return (
    <div className="column is-one-quarter-desktop is-half-tablet">
      <ImageModal
        isOpen={imageModalOpen}
        handleImageModal={handleImageModal}
        image={image}
      />
      <div className="card screenshot-card" onClick={handleImageModal}>
        <div className="card-image ">
          <figure className="image is-4by3">
            <img className='screenshot-card-image' src={image} alt="screenshot of project" />
          </figure>
        </div>
      </div >
    </div>
  )
}