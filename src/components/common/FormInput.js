import React from 'react'

export default function FormInput({ label, placeholder }) {
  return (

    <div className='field'>
      <label className='label'>{label}</label>
      <div className='control'>
        <input className='input has-background-light' type='input' placeholder={placeholder} />
      </div>
    </div>

  )
}