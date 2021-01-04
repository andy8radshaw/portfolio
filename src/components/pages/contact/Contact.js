import React from 'react'
import PageContainer from '../../common/PageContainer'
import PageTitle from '../../common/PageTitle'

import FormContainer from '../../common/FormContainer'
import FormInput from '../../common/FormInput'
import FormButton from '../../common/FormButton'

function Contact({ isLightMode }) {
  return (
    <PageContainer>
      <PageTitle
        title="Contact me"
        subTitle="If you're interested in working with me then you know what to do..."
        isLightMode={isLightMode}
      />
      <br/>
      <FormContainer>
        <FormInput
          label='Name'
          inputType='input has-background-light'
          placeholder="Name"
        />
        <FormInput
          label='Email'
          inputType='input has-background-light'
          placeholder="Email"
        />
        <FormInput
          label='Message'
          inputType='textarea has-background-light'
          placeholder="Message..."
        />
        <FormButton></FormButton>
      </FormContainer>
    </PageContainer>
  )
}


export default Contact