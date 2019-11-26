import React from 'react';
import {
  Background,
  Wrapper,
  Social,
  SocialWrapper,
  SocialTwo,
  LandingSocialIcon
} from '../styles/landing-style';
import {
  Card,
  Title,
  SubTitle,
  RetailButton,
  ContactButton
} from './Helpers';
import { FaInstagram } from 'react-icons/fa';
import { TiSocialFacebookCircular } from 'react-icons/ti';

// TODO: Add newsletter signup
function Landing() {
  return (
    <Wrapper>
      <Background>
        <Card>
          <Title>Steady Hand Tea</Title>
          <SubTitle>
            Lending a steady hand through tea and tea culture.
            <br />
            <br />
            Tea related posts, photos, articles, and events. <br />
            Artisan tea wholesale and distribution. <br />
            <br />
            Interested in wholesaling or retailing tea from us?
            <br />
            <RetailButton/>
            For wholesale inquiries and more information
            <ContactButton/>
            <br />
            <br />
            Regular tea arts classes and events in Portland.
            <br />
            <a className='link' href='https://www.airbnb.com/experiences/966234' target='_blank'>Book an AirBnb Experience with us</a>
            <br />
            <br />
            Connect on social media below to see what's brewing.
            <br />
            <br />

          </SubTitle>
          <SocialWrapper>
            <Social>
              <LandingSocialIcon
                href='https://www.instagram.com/steadyhandtea/'
                target='_blank'
                rel='noopener noreferrer'
                className='link'
                style={{ width: 'fit-content' }}
              >
                <FaInstagram />
              </LandingSocialIcon>
            </Social>
            <SocialTwo>
              <LandingSocialIcon
                href='https://www.facebook.com/steadyhandtea/'
                target='_blank'
                rel='noopener noreferrer'
                className='link'
                style={{ width: 'fit-content', fontSize: '2.3em' }}
              >
                <TiSocialFacebookCircular />
              </LandingSocialIcon>
            </SocialTwo>
          </SocialWrapper>
        </Card>
      </Background>
    </Wrapper>
  );
}

export default Landing;
