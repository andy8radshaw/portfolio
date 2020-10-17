import React from 'react'
import PageContainer from '../common/PageContainer'
import PageTitle from '../common/PageTitle'
import ProjectCard from '../common/ProjectCard'

import { projects } from '../../lib/projects'


export default function Portfolio() {
  return (
    <PageContainer>
      <PageTitle title="Portfolio" />
      <div className="container">
        <div className="columns is-multiline">

          {projects.map(project => (
            <ProjectCard
              projectName={project.name}
              key={project.id}
              projectImage={project.mainImage}
              imageAltText={project.name, 'image'}
            />
          ))}

        </div>
      </div>
    </PageContainer>
  )
}