import React, { useState } from 'react'
import PageContainer from '../../common/PageContainer'
import PageTitle from '../../common/PageTitle'

import FormContainer from '../../common/FormContainer'
import FormInput from '../../common/FormInput'
import FormButton from '../../common/FormButton'
import FormTextArea from '../../common/FormTextArea'

function Contact({ isLightMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

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
          placeholder="Name"
        />
        <FormInput
          label='Email'
          placeholder="Email"
        />
        <FormTextArea
          label='Message'
          placeholder="Message..."
        />
        <FormButton></FormButton>
      </FormContainer>
    </PageContainer>
  )
}


export default Contact