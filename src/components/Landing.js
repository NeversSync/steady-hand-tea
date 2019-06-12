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
import { Link } from 'gatsby';

// TODO: Add newsletter signup
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
            wholesale and distribution. <br/><br/>Interested in wholesaling or retailing tea from us?<br /> Click <a class="link" href='https://docs.google.com/spreadsheets/d/1833mdAkcj5nNxnhVaKtVrwqkMHAf3bdwRE4NeYMCZGM/edit?usp=sharing' target='_blank'>here</a> for our retail price list<br /> or<br /><a class="link" href="mailto:steadyhandtea@gmail.com" target="_blank"> contact us</a>for more information.<br />

            <br />
            Regular tea arts classes and events in Portland. Connect on social media below to see what's brewing.
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
