import addToMailchimp from 'gatsby-plugin-mailchimp';
import React, { Component } from 'react';
import {
  NewsletterWrapper,
  NewsletterForm,
  SubmitButton,
  NewsletterTitle,
  EmailInput,
  NewsletterOverlay
} from '../styles/newsletter-styles';
class Newsletter extends Component {
  state = {
    email: null,
    success: null,
    error: null
  };

  _handleChange = e => {
    this.setState({
      [`${e.target.name}`]: e.target.value
    });
  };

  _handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(this.state.email)
      .then(({ msg, result }) => {
        if (result !== 'success') {
          throw msg;
        }
        this.setState({ success: msg });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };

  render() {
    return (
      <NewsletterWrapper id='newsletter'>
        <NewsletterOverlay>
          <NewsletterTitle>
            Subscribe to our newsletter for updates on added teas, events, and
            more
          </NewsletterTitle>
          <NewsletterForm
            method='POST'
            name='steady-hand-newsletter-form'
            onSubmit={this._handleSubmit}
          >
            <EmailInput
              type='email'
              name='email'
              onChange={this._handleChange}
              placeholder='email'
            ></EmailInput>
            {this.state.error ? (
              <p style={{ fontSize: '.8em', color: 'red' }}>
                {this.state.error}
              </p>
            ) : null}
            <SubmitButton type='submit' name='subscribe'>
              SUBSCRIBE
            </SubmitButton>
            {this.state.success ? (
              <p style={{ fontSize: '.8em', color: 'green' }}>
                {this.state.success}
              </p>
            ) : null}
          </NewsletterForm>
        </NewsletterOverlay>
      </NewsletterWrapper>
    );
  }
}

export default Newsletter;
