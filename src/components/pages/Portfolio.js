import React from 'react'
import PageContainer from '../common/PageContainer'
import PageTitle from '../common/PageTitle'
import ProjectCard from '../common/ProjectCard'


export default function Portfolio() {
  return (
    <PageContainer>
      <PageTitle title="Portfolio" />
      <div className="container">
        <div className="columns is-multiline">

          <ProjectCard
            projectName="JOBR"
            projectImage="https://bulma.io/images/placeholders/1280x960.png"
            imageAltText="placeholder image"
          />


          <ProjectCard
            projectName="Hikr"
            projectImage="https://bulma.io/images/placeholders/1280x960.png"
            imageAltText="placeholder image"
          />

          <ProjectCard
            projectName="Dinder"
            projectImage="https://bulma.io/images/placeholders/1280x960.png"
            imageAltText="placeholder image"
          />

          <ProjectCard
            projectName="BattleShips"
            projectImage="https://bulma.io/images/placeholders/1280x960.png"
            imageAltText="placeholder image"
          />

        </div>
      </div>
    </PageContainer>
  )
}