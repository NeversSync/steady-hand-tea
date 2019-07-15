import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100vw;
  background: url('https://res.cloudinary.com/nicky-cloudinary/image/upload/f_auto,q_auto:best/v1559350545/steady-hand-tea/IMG_7239.jpg');
  background-size: contain;
  background-repeat: repeat-y;
  background-position: center center;

  @media (min-width: 900px) {
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
  padding-top: 10vh;
  padding-bottom: 10vh;

  @media (min-width: 900px) {
    grid-template-rows: 100vh;
    padding-top: 0vh;
    padding-bottom: 0vh;
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

export { Background, Wrapper, SocialWrapper, Social, SocialTwo, LandingSocialIcon };
