import React from 'react'

export default function FormInput({ label, inputType, placeholder }) {
  return (

    <div className='field'>
      <label className='label'>{label}</label>
      <div className='control'>
        <input className={inputType} type={inputType} placeholder={placeholder} />
      </div>
    </div>

  )
}