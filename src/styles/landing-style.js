import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 110vh;
  background: url('https://res.cloudinary.com/nicky-cloudinary/image/upload/f_auto,q_auto:best/v1559350545/steady-hand-tea/IMG_7239.jpg');
  background-size: cover;
  background-repeat: repeat-y;
  background-position: center center;
  padding-top: 10vh;

  @media (min-width: 900px) {
    grid-template-rows: 100vh;
    padding-top: 0;
  }
`;

const Background = styled.div`
  background-color: hsla(23, 8%, 19%, 0.4);
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100vh;
  justify-items: center;
  align-items: center;
`;

const SocialWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  justify-content: center;
  padding: .5em;
  width: 85%;
  justify-self: center;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 10px;

  @media (min-width: 900px) {
    grid-template-columns: 1fr auto auto 1fr;
    /* grid-template-rows: 200px; */
    grid-gap: 1em;
  }
`;

const Social = styled.div`
  display: grid;
  grid-column: 2 / 3;
  grid-template-columns: 1fr;
  align-items: center;
  max-width: 95%;
  /* width: fit-content; */
  justify-self: center;
  /* justify-content: center; */
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  padding: 1em;
  /* margin: .5em; */

  @media (min-width: 900px) {
    max-width: 100%;
    /* grid-template-columns: 1fr 2fr 2fr 1fr; */
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    height: 200px;
    justify-items: center;
  }
`;

const SocialTwo = styled(Social)`
  display: grid;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  justify-items: center;
  /* border: 1px solid rgba(255, 255, 255, 0.7); */
  box-shadow: 0 5px 15px rgba(50, 50, 93, 0.1), 0 3px 8px rgba(0, 0, 0, 0.07);
  margin-top: .5em;

  @media (min-width: 900px) {
    /* grid-template-columns: 1fr 2fr 2fr 1fr; */
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    margin-top: 0;
    /* height: 150px; */
  }
`;

export { Background, Wrapper, SocialWrapper, Social, SocialTwo };
