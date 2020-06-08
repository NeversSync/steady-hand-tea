import React from 'react';
import { navigate } from 'gatsby-link';
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

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <ContactWrapper id="contact">
      <ContactTitle>Contact</ContactTitle>
      <ContactCard>
        <ContactForm
          name="steady-hand-contact-form"
          method="post"
          action="/thanks"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="steady-hand-contact-form" />
          <p hidden>
            <label>Don’t fill this out if you're human: <input name="bot-field" onChange={handleChange} /></label>
          </p>
          <LeftHalfInputs>
            <LeftInput name='name' type='text' placeholder='Name' onChange={handleChange} />
            <LeftInput name='email' type='email' placeholder='Email address' onChange={handleChange} />
            <LeftInput name='subject' type='text' placeholder='Subject' onChange={handleChange} />
          </LeftHalfInputs>
          <RightHalfInputs>
            <RightTextArea name='message' type='text' placeholder='Message' onChange={handleChange} />
          </RightHalfInputs>
          <SubmitButton type='submit' value='submit'>
            SUBMIT
        </SubmitButton>
        </ContactForm>
      </ContactCard>
      <UpArrow />
    </ContactWrapper>
  )
}
