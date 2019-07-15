import React from 'react';
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
  <ContactWrapper>
    <ContactTitle>Contact</ContactTitle>
    <ContactCard>
      <ContactForm
        netlify='true'
        data-netlify='true'
        method='POST'
        data-netlify-honeypot='bot-field'
        name='steady-hand-contact-form'
      >
        <LeftHalfInputs>
          <LeftInput name='name' type='text' placeholder='Name' />
          <LeftInput name='email' type='email' placeholder='Email address' />
          <LeftInput name='subject' type='text' placeholder='Subject' />
          <input type='hidden' name='form-name' value='steady-hand-contact-form' />
        </LeftHalfInputs>
        <RightHalfInputs>
          <RightTextArea name='message' type='text' placeholder='Message' />
        </RightHalfInputs>
        <div data-netlify-recaptcha='true' />
        <SubmitButton type='submit' value='submit'>
          SUBMIT
        </SubmitButton>
      </ContactForm>
    </ContactCard>
  </ContactWrapper>
);

export default Contact;
