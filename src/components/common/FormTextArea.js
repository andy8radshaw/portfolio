import  React from 'react'

export default function FormTextArea({ label, placeholder }) {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <textarea className="textarea has-background-light" placeholder={placeholder}></textarea>
      </div>
    </div>
  )
}