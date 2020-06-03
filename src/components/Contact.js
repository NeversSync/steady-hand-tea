import React from 'react';
import { UpArrow } from './Helpers';
import {
  ContactWrapper,
  ContactForm,
  SubmitButton,
  ContactCard,
  ContactTitle,
  LeftHalfInputs,
  RightHalfInputs,
  RightTextArea,
  LeftInput
} from '../styles/Contact-styles';

const Contact = () => (
  <ContactWrapper id="contact">
    <ContactTitle>Contact</ContactTitle>
    <ContactCard>
      <ContactForm
        data-netlify='true'
        method='POST'
        netlify-honeypot='bot-field'
        name='steady-hand-contact-form'
        // data-netlify-recaptcha="true"
      >
        <LeftHalfInputs>
          <LeftInput name='name' type='text' placeholder='Name' />
          <LeftInput name='email' type='email' placeholder='Email address' />
          <LeftInput name='subject' type='text' placeholder='Subject' />
          <input type='hidden' name='bot-field' />
        </LeftHalfInputs>
        <RightHalfInputs>
          <RightTextArea name='message' type='text' placeholder='Message' />
        </RightHalfInputs>
        {/* <div data-netlify-recaptcha='true' /> */}
        <SubmitButton type='submit' value='submit'>
          SUBMIT
        </SubmitButton>
      </ContactForm>
    </ContactCard>
    <UpArrow />
  </ContactWrapper>
);

export default Contact;
