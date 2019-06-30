import styled from 'styled-components';

const InstaCard = styled.div`
  display: grid;
  /* box-shadow: 0 5px 15px rgba(50, 50, 93, 0.1), 0 3px 8px rgba(0, 0, 0, 0.07); */
  background: hsla(23, 17%, 19%, 0.6);
  border: solid 1px white;
  width: 100%;
  /* padding: 2vw; */
  border-radius: 4px;
  text-align: center;

  @media(min-width: 900px) {
    /* width: 60vw; */
  }
  `;

const InstaFeedContainer = styled(InstaCard)`
  display: grid;
  /* padding: 5em; */
  padding-bottom: .5em;
  /* box-shadow: 5px 5px 15px rgba(255, 255, 255, 0.2); */
  /* background: radial-gradient(hsla(240, 20%, 40%, .9), hsla(240, 53%, 15%, .8)); */
  background: white;
  /* grid-column: 2 / 6; */
  /* grid-row: 2 / 3; */
  grid-column: 1 / -1;
  width: 85%;
  justify-self: center;

  @media (min-width: 1200px) {
    /* margin-top: 1.5em; */
    padding: 0 10vw 0 10vw;
    padding-bottom: 1.5em;
    grid-column: 1 / -1;
    width: 100%;
    justify-self: center;
  }
`;

const InstaTitleWrapper = styled.div`
  display: grid;
  grid-column: 1 / -1;
  justify-items: center;
  align-content: center;
  grid-gap: .5em;
  padding: 1em;
`;

const InstaFeedImagesWrapper = styled(InstaCard)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;
  background-color: white;

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const InstaImageWrapper = styled(InstaCard)`
  display: grid;
  /* margin: .3em; */
  transition: all 200ms ease-in-out;
  background-color: white;

  :hover {
    box-shadow: none;
  }

  @media (min-width: 1200px) {
    /* margin: .2em; */

    :hover {
      /* box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1), 0 3px 8px rgba(255, 255, 255, 0.05); */
      box-shadow: 0 5px 15px hsla(190, 90%, 42%, .4), 0 3px 8px hsla(190, 90%, 42%, .4);
    }
  }
`;

const SocialIcon = styled.a`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  color: black;
  font-size: 2em;

`;


export { InstaFeedImagesWrapper, InstaFeedContainer, InstaImageWrapper, InstaTitleWrapper, SocialIcon };


