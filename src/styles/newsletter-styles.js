import styled from 'styled-components';
import { Wrapper, SubTitle, Card } from '../components/Helpers';

const NewsletterWrapper = styled(Wrapper)`
  background: white;
  grid-template-columns: 2vw auto 2vw;
  justify-items: center;
  justify-content: center;
  grid-gap: 1em;
  padding: 8vh 0;

  @media (min-width: 1200px) {
  }
`;

const NewsletterTitle = styled(SubTitle)`
  grid-column: 2 / 3;
  font-size: 1.5em;
  color: hsla(187, 5%, 33%, 1);
  font-weight: 500;
  /* justify-self: center; */
  text-align: center;
  /* margin: 0; */
  /* width: fit-content; */

  @media (min-width: 1200px) {
    font-size: 1em;
    width: 40vw;
    /* margin-bottom: 1em; */
  }
`;

const NewsletterForm = styled.form`
  display: grid;
  background-color: white;
  justify-self: center;

  @media (min-width: 1200px) {
    grid-column: 2 / 3;
    /* justify-content: center; */
    grid-gap: 0.75em;
    width: 350px;
    text-align: center;
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

  @media (max-width: 900px) {
    /* grid-row: 1 / 2; */
    /* grid-column: 1 / -1; */
  }
`;

const SubmitButton = styled.button`
  display: grid;
  grid-column: 1 / -1;
  grid-row: 3 / 4;
  margin: 0;
  font-size: 16px;
  width: 10em;
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
  EmailInput
};
