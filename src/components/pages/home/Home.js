/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react'

import PageContainer from '../../common/PageContainer'
import PageTitle from '../../common/PageTitle'
import ContactModal from '../contact/ContactModal'


function Home({ isLightMode }) {

  const [contactModalIsOpen, setContactModalIsOpen] = useState(false) 

  const handleContactModal = () => {
    setContactModalIsOpen(!contactModalIsOpen)
  }
  
  return (
    <PageContainer>
      <div className='Home'>
        <PageTitle
          title="Andy Bradshaw // Software Engineer"
          subTitle="About me:"
          isLightMode={isLightMode}
        />
        <ContactModal 
          isOpen = {contactModalIsOpen}
          closeModal={handleContactModal}
        />
        <div className="stats">
          <p><strong className={isLightMode ? '' : 'has-text-light'}>Name: </strong>Andy Bradshaw</p>
          <p><strong className={isLightMode ? '' : 'has-text-light'}>Location: </strong>New Cross, South East London</p>
          <p><strong className={isLightMode ? '' : 'has-text-light'}>Hometown: </strong>Taunton, Somerset</p>
          <p><strong className={isLightMode ? '' : 'has-text-light'}>Likes: </strong>Guitars, Formula 1, Climbing, Vegatsu curry from Wagamamas, Purezza Pizza</p>
          <p><strong className={isLightMode ? '' : 'has-text-light'}>Dislikes: </strong>Lockdown, and not being able to see my family</p>
          <p><strong className={isLightMode ? '' : 'has-text-light'}>Desk Setup: </strong>MacBook Pro 16&quot;, Dell 27&quot; 4k Monitor, KeyChron K2 Keyboard (blue Gateron
                  switches), Apple Magic Trackpad, CalDigit TS3 hub, Lacie D2 HD</p>
        </div>
        <br></br>
        <p>A Junior Software Engineer embarking on my first role at <a href="https://www.reachplc.com/home" target="_blank" className="content-link">Reach Plc.</a> Previously graduating
        from General Assembly’s Software Engineering Immersive course, where I obtained a strong
        understanding of modern programming languages including HTML, CSS, JavaScript, React, Node.js & Python. My
        journey into software engineering came from a love of problem solving and a fascination and curiosity for
        all things tech.
        </p><br/>
        
        <p>Before all this coding took off, I worked in the audio industry for 10 years, designing and selling sound
        systems into shops, offices, stadiums and churches. Projects I&apos;ve worked on include; Harrods, Kings
        Collage Chapel Cambridge, Body Worlds Ldn and many others. My time in the audio world has taught me a
        great deal
        about being adaptable, working as part of a team and delivering excellent results on time in an agile
        environment. In my new role at Reach I will continue on the path of development, improving my
        skills, and aim to become a valued and creative member of the team.</p><br/>
        <p>Please get in <a href='#contact' className="content-link" onClick={handleContactModal}>contact</a> if you are interested in working with me. Likewise, if you
        would like some advice about your sound system or just want to chat guitars. Gibson ES-335 if you&apos;re
        asking...</p>
        <br></br>
      </div>
    </PageContainer>
  )
}

export default Home