import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import PageContainer from '../../common/PageContainer'
import PageTitle from '../../common/PageTitle'
import ScreenshotCard from './ScreenshotCard'

import { projects } from '../../../lib/projects'

export default function ProjectShow({ isLightMode }) {
  const [project, setProject] = useState(null)
  
  const { id } = useParams()

  useEffect(() => {
    const getProject = () => {
      const projectData = projects.filter(project => {
        if (project.name === id) return project
        return ''
      })
      setProject(projectData[0])
      return
    }
    getProject()
  }, [id])

  if (!project) return null

  return (
    <PageContainer>
      <PageTitle title={project.name} isLightMode={isLightMode} />
      <p>{project.description}</p>
      <br />
      <p>Links:</p>
      <br />
      <a href={project.deployedApp} rel="noopener noreferrer" target="_blank" className="content-link">{project.name}</a>
      <br />
      <a href={project.readMe} rel="noopener noreferrer" target="_blank" className="content-link">Documentation</a>
      <br />
      <Link to="/portfolio" className="content-link">Back to Portfolio</Link>
      <br />
      <br />
      <p>Screenshots:</p>
      <br />
      <div className="container">
        <div className="columns is-multiline">
          {project.images.map(image => (
            <ScreenshotCard
              key={image}
              image={image}
            />
          ))}
        </div>
      </div>
    </PageContainer>
  )
}