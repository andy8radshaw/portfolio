import React from 'react'

export default function PageContainer({ children }) {
  return (
    <div className="container">
      <div className="section">
        {children}
      </div>
    </div>
  )
}