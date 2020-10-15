import React from 'react'

export default function PageTitle({ title, subTitle }) {
  return (
    <>
      <h1 className="title">{title}</h1>
      <h1 className="subtitle">{subTitle}</h1>
    </>
  )
}