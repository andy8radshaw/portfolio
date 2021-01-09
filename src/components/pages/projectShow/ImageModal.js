import React from 'react'

export default function ImageModal({ isOpen, handleImageModal, image }) {
  return (
    <div className={isOpen ? 'modal is-active' : 'modal'}>
      <div className='modal-background' onClick={handleImageModal}></div>
      <div className='modal-content image-modal'>
        <p className='image is-4by3'>
          <img className='image-modal-img' src={image} alt=''/>
        </p>
      </div>
      <button className='modal-close is-large' onClick={handleImageModal} aria-label='close'></button>
    </div>
  )
}