import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import PageContainer from '../common/PageContainer'
import PageTitle from '../common/PageTitle'

import { projects } from '../../lib/projects'

export default function ProjectShow({ isLightMode }) {
  const [project, setProject] = useState(null)
  const { id } = useParams()

  console.log(typeof(id))

  useEffect(() => {
    const getProject = () => {
      const projectData = projects.filter(project => {
        if (project.name === id) return project
      })
      setProject(projectData[0])
    }
    getProject()
  }, [id])

  if (!project) return null

  return (
    <PageContainer>
      <PageTitle  title={project.name} isLightMode={isLightMode} />
      <p>{project.description}</p>
      <br/>
      <a href={project.deployedApp} rel="noreferrer" target="_blank">Deployed App</a>
      <br/>
      <a href={project.readMe} rel="noreferrer" target="_blank">Readme</a>

    </PageContainer>
  )
}