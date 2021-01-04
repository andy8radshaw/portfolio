import React from 'react'

export default function FormContainer({ children }) {
  return (
    <div className='columns'>
      <form className='column is-half is-offset-one-quarter box has-background-link'>
        {children}
      </form>
    </div>
  )
}