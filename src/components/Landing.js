import React from "react";
import Link from "gatsby-link";
import { Background, Wrapper, Social } from "../styles/landing-style";
import {
  Card,
  Title,
  SubTitle,
  CTAButton,
  CTAButtonText,
  EventButton
} from "./Helpers";

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
          <Social>
            <div style={{display: 'grid', gridColumn: '2 / 3', gridRow: '1 / 2',}}>
              <a
                class="link"
                href="https://www.instagram.com/steadyhandtea/"
                target="_blank"
              >
                Instagram
              </a>
              <br/>
              <a
                class="link"
                href="https://www.instagram.com/steadyhandtea/"
                target="_blank"
              >
                Facebook
              </a>
            </div>
            <SubTitle
              style={{
                display: "grid",
                gridColumn: "3 / 4",
                gridRow: "1 / 2",
                justifySelf: "center",
                border: "1px solid rgba(255,255,255, .7",
                boxShadow:
                  "0 5px 15px rgba(50, 50, 93, 0.1), 0 3px 8px rgba(0, 0, 0, 0.07)",
                padding: "1em",
                margin: "1em"
              }}
            >
              Tea and Japanese<br /> Sweets Event<EventButton />
            </SubTitle>
          </Social>
        </Card>
      </Background>
    </Wrapper>
  );
}

export default Landing;
