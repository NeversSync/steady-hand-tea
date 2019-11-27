import styled from 'styled-components';

const InstaCard = styled.div`
  display: grid;
  background: hsla(23, 17%, 19%, 0.6);
  border: solid 1px white;
  width: 100%;
  border-radius: 4px;
  text-align: center;
  `;

const InstaFeedContainer = styled(InstaCard)`
  display: grid;
  padding-bottom: 5vh;
  background: white;
  grid-column: 1 / -1;
  width: 85%;
  justify-self: center;

  @media (min-width: 1200px) {
    padding: 0vh 10vw 5vh 10vw;
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

    :hover {
      box-shadow: 0 5px 15px hsla(32, 10%, 60%, .4), 0 3px 8px hsla(32, 10%, 60%, .4);
    }
  }
`;

const IgSocialIcon = styled.a`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  color: hsla(187, 5%, 23%, 1);
  font-size: 2em;
`;

export { InstaFeedImagesWrapper, InstaFeedContainer, InstaImageWrapper, InstaTitleWrapper, IgSocialIcon };


