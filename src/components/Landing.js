import React from 'react';
import {
  Background,
  Wrapper,
  Social,
  SocialWrapper,
  SocialTwo,
  LandingSocialIcon,
  LandingCard,
  CTACard
} from '../styles/landing-style';
import { Title, SubTitle, RetailButton, ContactButton } from './Helpers';
import { FaInstagram } from 'react-icons/fa';
import { TiSocialFacebookCircular } from 'react-icons/ti';

// TODO: Add newsletter signup
function Landing() {
  return (
    <Wrapper>
      <Background>
        <LandingCard>
          <Title>Steady Hand Tea</Title>
          <SubTitle>
            Lending a steady hand through tea and tea culture
            <br />
            <br />
            Quality tea content<br/><br/>
            Education, photography, and events<br />
            Artisan tea sales, retail and wholesale<br />
          </SubTitle>
          <CTACard>
            <SubTitle>
              Interested in buying<br/>tea from us?
              <RetailButton />
            </SubTitle>
            <SubTitle>
              For wholesale and<br/>other inquiries
              <ContactButton />
            </SubTitle>
          </CTACard>
          <SubTitle>Regular tea arts classes and events in Portland.</SubTitle>
          <a
            className='link'
            href='https://www.airbnb.com/experiences/966234'
            target='_blank'
          >
            Book an AirBnb Experience with us
          </a><br/>
          <SubTitle>
            Connect on social media below<br/> to see what's brewing, and<br/>
          </SubTitle>
          <a className='link' href="#newsletter">Subscribe to our newsletter</a>
          <SubTitle>to stay in touch</SubTitle>
          <SocialWrapper>
            <Social>
              <LandingSocialIcon
                href='https://www.instagram.com/steadyhandtea/'
                target='_blank'
                rel='noopener noreferrer'
                className='link icon'
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
                className='link icon'
                style={{ width: 'fit-content', fontSize: '2.3em' }}
              >
                <TiSocialFacebookCircular />
              </LandingSocialIcon>
            </SocialTwo>
          </SocialWrapper>
        </LandingCard>
      </Background>
    </Wrapper>
  );
}

export default Landing;
