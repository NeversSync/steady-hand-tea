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
  padding-bottom: 10vh;
  background: white;
  grid-column: 1 / -1;
  width: 85%;
  justify-self: center;

  @media (min-width: 1200px) {
    padding: 10vh 10vw 15vh 10vw;
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
  transition: all 200ms ease-in-out;
  background-color: white;

  :hover {
    box-shadow: none;
  }

  @media (min-width: 1200px) {
    /* margin: .2em; */

    :hover {
      /* box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1), 0 3px 8px rgba(255, 255, 255, 0.05); */
      box-shadow: 0 5px 15px hsla(32, 70%, 60%, .4), 0 3px 8px hsla(32, 70%, 60%, .4);
    }
  }
`;

const IgSocialIcon = styled.a`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  color: black;
  font-size: 2em;
`;


export { InstaFeedImagesWrapper, InstaFeedContainer, InstaImageWrapper, InstaTitleWrapper, IgSocialIcon };


