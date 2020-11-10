import React from 'react'
import PageContainer from '../common/PageContainer'
import PageTitle from '../common/PageTitle'
import ProjectCard from '../common/ProjectCard'

import { projects } from '../../lib/projects'


export default function Portfolio({ isLightMode }) {
  return (
    <PageContainer>
      <PageTitle
        title="Portfolio"
        isLightMode={isLightMode}
      />
      <div className="container">
        <div className="columns is-multiline">

          {projects.map(project => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}

        </div>
        <br></br>
      </div>
    </PageContainer>
  )
}