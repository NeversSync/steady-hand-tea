import styled from 'styled-components';
import { Wrapper, SubTitle } from '../components/Helpers';

const NewsletterWrapper = styled(Wrapper)`
  background-image: url('https://res.cloudinary.com/nicky-cloudinary/image/upload/f_auto,q_auto:best/v1575085619/steady-hand-tea/red-leaf-macro.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  justify-items: center;
  justify-content: center;
  padding: 0;

  @media(min-width: 900px) {
    background-attachment: fixed;
    background-image: url('https://res.cloudinary.com/nicky-cloudinary/image/upload/f_auto,q_auto/v1575085621/steady-hand-tea/red-leaves.jpg');
  }
`;

const NewsletterOverlay = styled.div`
  padding: 10vh 0;
  display: grid;
  grid-column: 1 / -1;
  width: 100vw;
  grid-template-columns: 2vw auto 2vw;
  /* background: linear-gradient(to bottom,rgba(70,70,70,0), rgb(255,255,255)); */
  grid-gap: 1em;
  background: linear-gradient(to bottom,rgba(30,30,30,.4), rgb(255,255,255));
`;

const NewsletterTitle = styled(SubTitle)`
  grid-column: 2 / 3;
  font-size: 1em;
  color: white;
  /* color: hsla(187, 5%, 28%, 1); */
  font-weight: 500;
  justify-self: center;
  text-align: center;
  text-shadow: 0px 2px 4px rgba(0,0,0, 0.4);

  @media (min-width: 1200px) {
    font-size: 1.2em;
    width: 40vw;
  }
`;

const NewsletterForm = styled.form`
  display: grid;
  justify-self: center;
  grid-column: 2 / 3;
  grid-gap: 0.5em;
  width: fit-content;
  text-align: center;

  @media (min-width: 1200px) {
    grid-gap: 0.75em;
    width: 350px;
  }
`;

const EmailInput = styled.input`
  display: grid;
  border: none;
  box-shadow: 0px 2px 4px rgba(50, 50, 93, 0.1), 0 3px 8px rgba(0, 0, 0, 0.07) !important;
  font-size: 16px;
  border-radius: 8px;
  padding: 20px;
  -webkit-appearance: none;

  &:focus {
    box-shadow: 0px 0px 2px hsla(276, 70%, 59%, 0.8);
  }
`;

const SubmitButton = styled.button`
  display: grid;
  grid-column: 1 / -1;
  grid-row: 3 / 4;
  margin: 0;
  font-size: 16px;
  width: 60vw;
  height: 55px;
  justify-self: center;
  align-items: center;
  color: white;
  background: linear-gradient(hsla(187, 65%, 55%, 1), hsla(187, 65%, 40%, 1));
  border: none;
  border-radius: 7px;
  border-bottom: 3px solid hsla(187, 65%, 30%, 0.7);
  box-shadow: 0px 2px 3px -1px rgba(0, 0, 0, 0.3);
  transition: 0.3s ease;
  letter-spacing: 1.8px;

  &:hover {
    &:hover {
      background: linear-gradient(
        hsla(187, 65%, 45%, 1),
        hsla(187, 65%, 35%, 1)
      );
      box-shadow: 0px 2px 3px -1px rgba(0, 0, 0, 0.3);
    }
  }
  &:active {
    background: linear-gradient(hsla(187, 65%, 45%, 1), hsla(187, 65%, 35%, 1));
    -webkit-transform: translate(0px, 2px);
    transform: translate(0px, 2px);
    border-bottom: none;
    box-shadow: none;
  }

  @media (min-width: 900px) {
    font-size: 20px;
    width: 10em;
    &:hover {
      background: linear-gradient(
        hsla(187, 65%, 58%, 1),
        hsla(187, 65%, 40%, 1)
      );
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
`;

export {
  NewsletterWrapper,
  NewsletterForm,
  SubmitButton,
  NewsletterTitle,
  EmailInput,
  NewsletterOverlay
};
