import React from 'react'

export default function PageTitle({ title, subTitle, isLightMode }) {
  
  return (
    <>
      <h1 className={isLightMode ? 'title' : 'title has-text-light'}>{title}</h1>
      <hr/>
      <h1 className={isLightMode ? 'subtitle' : 'subtitle has-text-light'}>{subTitle}</h1>
    </>
  )
}