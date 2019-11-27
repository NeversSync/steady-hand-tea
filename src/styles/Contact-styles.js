import styled from 'styled-components';
// import { Wrapper, Title,  Card} from '../components/Helpers';
import { Wrapper, SubTitle, Card } from '../components/Helpers';

const ContactWrapper = styled(Wrapper)`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='80' height='40'%3E%3Cpath fill='%2395be00' fill-opacity='0.2' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E"), linear-gradient(hsla(32, 30%, 95%, .2), hsla(32, 70%, 60%, .5));
  grid-template-columns: 50px 1fr 50px;
  justify-items: center;
  grid-gap: 1em;
  grid-template-rows: 5vh auto auto auto 7vh;

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;

const ContactTitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;
  grid-column: 2 / 3;
  padding: 20px;
`;

const ContactSummaryTitleWrapper = styled(ContactTitleWrapper)`
  grid-template-rows: 1fr;
  padding: 10px 0px 40px 0px;
`;

const ContactTitle = styled(SubTitle)`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  font-size: 1.5em;
  color: hsla(187, 5%, 33%, 1);
  font-weight: 500;
  justify-self: center;
  text-align: center;
  margin: 0;

  @media (min-width: 1200px) {
    grid-column: 3 / 5;
    grid-row: 2 / 3;
    font-size: 2em;
    margin-bottom: 1em;
  }
`;

const ContactCard = styled(Card)`
  padding: 2em 5px 0px 5px;
  background-color: white;
  grid-column: 1 / -1;
  width: 85%;
  grid-row: 3 / 4;
  justify-self: center;

  @media (min-width: 1200px) {
    padding: 2em 5px;
    display: grid;
    padding: 2em;
    width: 700px;
    grid-column: 2 / 6;
    grid-row: 3 / 4;
    justify-content: center;
  }
`;

const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 2em;
  width: unset;

  @media (min-width: 1200px) {
    grid-gap: 0.75em;
    grid-template-rows: 250px 1em auto;
    width: 600px;
    text-align: center;
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

const LeftHalfInputs = styled.div`
  display: grid;
  grid-column: 1 / 2;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 10px;

  @media (max-width: 900px) {
    grid-row: 1 / 2;
    grid-column: 1 / -1;
  }
`;

const RightHalfInputs = styled.div`
  grid-column: 2 / 3;

  @media (max-width: 900px) {
    grid-row: 2 / 3;
    grid-column: 1 / -1;
  }
`;

const LeftInput = styled.input`
  border: none;
  box-shadow: 0px 2px 4px rgba(50, 50, 93, 0.1), 0 3px 8px rgba(0, 0, 0, 0.07) !important;
  font-size: 16px;
  border-radius: 8px;
  padding: 10px;
  -webkit-appearance: none;

  &:focus {
    box-shadow: 0px 0px 2px hsla(276, 70%, 59%, 0.8);
  }

  @media (max-width: 900px) {
    width: 80%;
    justify-self: center;
  }
`;

const RightTextArea = styled.textarea`
  display: grid;
  border: none;
  box-shadow: 0px 2px 4px rgba(50, 50, 93, 0.1), 0 3px 8px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  font-size: 16px;
  padding: 10px;
  width: 100%;
  height: 100%;
  -webkit-appearance: none;

  &:focus {
    box-shadow: 0px 0px 2px hsla(276, 70%, 59%, 0.8);
  }

  @media (max-width: 900px) {
    width: 80%;
    margin: 0 auto;
    height: 150px;
  }
`;

export {
  ContactWrapper,
  ContactForm,
  SubmitButton,
  ContactCard,
  ContactTitle,
  ContactTitleWrapper,
  LeftHalfInputs,
  RightHalfInputs,
  RightTextArea,
  LeftInput,
  ContactSummaryTitleWrapper
};
