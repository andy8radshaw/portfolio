import React from 'react'
import PageContainer from '../../common/PageContainer'
import PageTitle from '../../common/PageTitle'

function Contact({ isLightMode }) {
  return (
    <PageContainer>
      <PageTitle 
        title="Contact me" 
        subTitle="If you're interested in working with me then you know what to do..."
        isLightMode={isLightMode}
      />
    </PageContainer>
  )
}


export default Contact