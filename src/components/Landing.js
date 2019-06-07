import React from 'react';
import {
  Background,
  Wrapper,
  Social,
  SocialWrapper,
  SocialTwo
} from '../styles/landing-style';
import {
  Card,
  Title,
  SubTitle,
  CTAButton,
  CTAButtonText,
  EventButton
} from './Helpers';

// TODO: make mobile responsive social thing
function Landing() {
  return (
    <Wrapper>
      <Background>
        <Card>
          <Title>Steady Hand Tea</Title>
          <SubTitle>
            Lending a steady hand through tea and tea culture.<br />
            <br />
            Tea related posts, photos, articles, and events. Artisan tea
            wholesale and distribution. Contact for price list.<br />
            <br />
            Regular tea arts classes and events in Portland. Check events tab
            for more information.
            <br />
            <br />
          </SubTitle>
          <SocialWrapper>
            <Social>
              <a
                class="link"
                href="https://www.instagram.com/steadyhandtea/"
                target="_blank"
              >
                Instagram
              </a>
              <br />
              <a
                class="link"
                href="https://www.instagram.com/steadyhandtea/"
                target="_blank"
              >
                Facebook
              </a>
            </Social>
            <SocialTwo>
              <SubTitle style={{display: 'grid'}}>Tea and Japanese<br /> Sweets Event
                <EventButton />
              </SubTitle>
            </SocialTwo>
          </SocialWrapper>
        </Card>
      </Background>
    </Wrapper>
  );
}

export default Landing;
