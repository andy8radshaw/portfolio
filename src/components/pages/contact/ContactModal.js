import React from 'react'

export default function ContactModal({ isOpen, onClick }) {
  return (
    <div className={isOpen ? 'modal is-active' : 'modal' }>
      <div className="modal-background" onClick={onClick}></div>
      <div className="modal-content">hello there modal
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={onClick}></button>
    </div>
  )
}