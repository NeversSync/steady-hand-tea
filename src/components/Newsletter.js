import addToMailchimp from 'gatsby-plugin-mailchimp';
import React, { Component } from 'react';
import {
  NewsletterWrapper,
  NewsletterForm,
  SubmitButton,
  NewsletterTitle,
  EmailInput
} from '../styles/newsletter-styles';

// var form = document.getElementById('newsletter');

// form.addEventListener('submit', function(e) {
//   e.preventDefault();
//   const email = document.getElementById('inputEmail').value;
//   submitEmail(email);
// });

// function submitEmail(email) {
//   fetch('/.netlify/functions/form-handler', {
//     method: 'post',
//     body: JSON.stringify({
//       email: email
//     })
//   })
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data) {
//       const messageDiv = document.getElementById('message');
//       messageDiv.innerText = 'Confirmation email has been sent!';
//     });
// }

class Newsletter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(e.email)
      .then(data => {
        console.log(data);
        this.setState({email: data});
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
      })
      .catch(() => {});
  };

  render() {
    return (
      <NewsletterWrapper>
        <NewsletterTitle>
          Subscribe to our newsletter for updates on added teas, events, and
          more
        </NewsletterTitle>
        <NewsletterForm
          id='newsletter'
          netlify='true'
          data-netlify='true'
          method='POST'
          data-netlify-honeypot='bot-field'
          name='steady-hand-newsletter-form'
          onSubmit={e => this._handleSubmit(e)}
        >
          <EmailInput
            name='email'
            type='email'
            placeholder='Email address'
          ></EmailInput>
          <input
            type='hidden'
            name='form-name'
            value='steady-hand-newsletter-form'
          />
          <div data-netlify-recaptcha='true' />
          <SubmitButton type='submit' value='submit'>
            SUBSCRIBE
          </SubmitButton>
        </NewsletterForm>
      </NewsletterWrapper>
    );
  }
}

export default Newsletter;
