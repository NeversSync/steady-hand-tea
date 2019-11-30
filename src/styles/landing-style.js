import styled from 'styled-components';
import { Card } from '../components/Helpers';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100vw;
  background: url('https://res.cloudinary.com/nicky-cloudinary/image/upload/f_auto,q_auto/v1575085782/steady-hand-tea/dragon-steam-comp.jpg');
  /* background-size: contain; */
  background-size: cover;
  /* background-repeat: repeat-y; */
  background-position: center center;

  @media (min-width: 900px) {
    background: url('https://res.cloudinary.com/nicky-cloudinary/image/upload/f_auto,q_auto:best/v1559350545/steady-hand-tea/IMG_7239.jpg');
    grid-template-rows: 100vh;
    background-size: cover;
  }
`;

const Background = styled.div`
  background-color: hsla(23, 8%, 19%, 0.4);
  display: grid;
  grid-template-columns: 100%;
  justify-items: center;
  align-items: center;
  padding: 5vh 0;

  @media (min-width: 900px) {
    /* grid-template-rows: 100vh; */
    padding: 0;
    /* margin: 10em; */
  }
`;

const LandingCard = styled(Card)`
  justify-self: center;
  align-self: center;
  padding: 0 1em;

  @media(min-width: 900px) {
    padding: 0;
  }
`;

const CTACard = styled.div`
  display: grid;
  grid-template-columns:auto;
  justify-content: space-around;
  justify-items: center;
  grid-gap: 1em;
  margin: 1em;

  @media(min-width:1000px) {
    margin: 1.5em 1em;
    grid-gap: 0;
    grid-template-columns: auto auto;
  }
`;

const SocialWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  justify-content: center;
  padding: 0.5em;
  width: 85%;
  justify-self: center;

  @media (min-width: 900px) {
    grid-template-columns: 1fr auto auto 1fr;
    grid-gap: 1em;
  }
`;

const Social = styled.div`
  display: grid;
  grid-column: 1 / 2;
  grid-template-columns: 1fr;
  align-items: center;
  justify-self: center;

  @media (min-width: 900px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    justify-items: center;
  }
`;

const SocialTwo = styled(Social)`
  display: grid;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  justify-items: center;

  @media (min-width: 900px) {
    grid-column: 3 / 4;
    margin-top: 0;
  }
`;

const LandingSocialIcon = styled.a`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  color: white;
  font-size: 2em;
`;

export { Background, Wrapper, LandingCard, SocialWrapper, Social, SocialTwo, LandingSocialIcon, CTACard };
