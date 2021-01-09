import React from 'react'

export default function ContactModal({ isOpen, closeModal }) {
  return (
    <div className={isOpen ? 'modal is-active' : 'modal'}>
      <div className='modal-background' onClick={closeModal}></div>
      <div className='modal-content box has-background-light contact-modal '>
        <div className='has-icons-centered'>
          <a href='mailto:andy8radshaw@gmail.com' className='icon is-large'>
            <i className='contact-icon fas fa-envelope'></i>
          </a>
          <a href='https://www.linkedin.com/in/andybradshaw8/' target='_blank' rel='noopener noreferrer' className='icon is-large'>
            <i className='contact-icon fab fa-linkedin'></i>
          </a>
          <a href='https://github.com/andy8radshaw' target='_blank' rel='noopener noreferrer' className='icon is-large'>
            <i className='contact-icon fab fa-github'></i>
          </a>
          <a href='https://instagram.com/andybradshaw' target='_blank' rel='noopener noreferrer' className='icon is-large'>
            <i className='contact-icon fab fa-instagram'></i>
          </a>
        </div>
      </div>
      <button className='modal-close is-large' aria-label='close' onClick={closeModal}></button>
    </div>
  )
}