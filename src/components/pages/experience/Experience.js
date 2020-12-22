import React from 'react'
import PageContainer from '../../common/PageContainer'
import PageTitle from '../../common/PageTitle'

export default function Experience({ isLightMode }) {
  return (
    <PageContainer>
      <PageTitle 
        title="Experience"
        isLightMode={isLightMode}
      />

      <h1 className={isLightMode ? 'subtitle' : 'subtitle has-text-light'}>Reach Plc | Junior Software Engineer | Oct 2020 to present</h1>
      <p>Whilst working at Reach I have collaborated on a range of projects. As part of the User Journeys team I have been tasked with building and maintaining parts of large scale online publications across multiple platforms. Including Web, Accellerated Mobile Pages, Facebook Instant Articles, Apple News and AWS. As part of the Agile team I am used to collaborating and working in a team towards 2-week sprint goals. As part of this role I use JavaScript, Pug.JS, Express, Node.js & Java.</p>
      <hr/>
      <h1 className={isLightMode ? 'subtitle' : 'subtitle has-text-light'}>General Assembly | Software Engineering Student | March 2020 - July 2020</h1>
      <p>The GA SEI course was a full time immersive course that included over 400 hours of professional study and a further 400+ hours of extra curricular study over 13 weeks. Throughout my time on the course, I have gained knowledge of front-end and back-end technologies and have the ability to create real world working applications on both the web and mobile. I have developed a pleasure for clear code, a keenness to learn new technologies and an enthusiasm for solving both real world and technical problems. While studying at GA, I have worked on multiple projects solely and pair/group coding, both remote and on campus.</p>
    </PageContainer>
  )
}