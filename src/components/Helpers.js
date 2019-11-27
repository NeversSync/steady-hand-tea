import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: white;
`;

const Copy = styled.p`
  font-size: .8em;
  line-height: 22px;
  letter-spacing: 1.5px;
  font-weight: 400;
  margin: 0;

  @media (min-width: 900px) {
    letter-spacing: 1.75px;
    font-size: .9em;
    line-height: 26px;
  }
`;

const Card = styled.div`
  display: grid;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.7) ;
  /* background: hsla(23, 17%, 19%, 0.6); */
  background: hsla(23, 10%, 39%, 0.7);
  width: 85vw;
  padding: 2vw;
  border-radius: 4px;
  text-align: center;

  @media(min-width: 900px) {
    width: 60vw;
  }
  `;

const ImageWrapper = styled(Card)`
  display: grid;
  grid-column: 1 / -1;
`;

const Image = styled.img`
  display: grid;
  width: 100%;
  border-radius: 4px;
`;

const Title = styled.h1`
  font-family: 'goatskin_brush_personal_useRg';
  /* font-family: stylish, sans-serif; */
  display: grid;
  justify-self: center;
  margin: .5em;
  margin-bottom: .5em;
  font-size: 2em;
  letter-spacing: 3px;
  color: white;

  @media (min-width: 1100px) {
    font-size: 2em;
  }
`;

const SubTitle = styled.h3`
  font-size: .7em;
  letter-spacing: 4px;
  color: white;
  font-weight: 300;
  line-height: 1.2em;

  @media (min-width: 1100px) {
    font-size: .8em;
  }
`;

const CTAButtonText = styled.p`
  color: white;
`;

const CTAButton = styled.a`
  justify-self: center;
  align-self: flex-end;
  font-size: 16px;
  margin: 0 auto;
  margin-top: 1em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 200px;
  height: 55px;
  background: linear-gradient(to left, hsla(348, 86%, 59%, .8), hsla(39, 100%, 63%, 0.8));
  border: none;
  border-radius: 7px;
  border-bottom: 3px solid hsla(348, 2%, 10%, .5);
  box-shadow: 0px 2px 3px -1px rgba(0, 0, 0, 0.3);
  transition: .3s ease;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to left, hsla(348, 96%, 69%, .8), hsla(39, 100%, 63%, 0.8));
    box-shadow: 0 4px 4px rgba(0,0,0,.25);
  }
  &:active {
    background: linear-gradient(to left, hsla(348, 86%, 49%, .8), hsla(39, 90%, 43%, 0.8));
    -webkit-transform: translate(0px, 2px);
    transform: translate(0px, 2px);
    border-bottom: none;
    box-shadow: none;
  }

  @media(max-width: 900px) {
    /* margin: 0; */
    /* font-size: 16px; */
    &:hover {
      background: linear-gradient(to left, hsla(348, 86%, 59%, .8), hsla(39, 100%, 63%, 0.8));
      box-shadow: 0px 2px 3px -1px rgba(0, 0, 0, 0.3);
    }
  }
`;
const InternalCTAButton = styled(Link)`
  justify-self: center;
  align-self: flex-end;
  font-size: 16px;
  margin: 0 auto;
  margin-top: 1em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 200px;
  height: 55px;
  background: linear-gradient(to left, hsla(348, 86%, 59%, .8), hsla(39, 100%, 63%, 0.8));
  border: none;
  border-radius: 7px;
  border-bottom: 3px solid hsla(348, 2%, 10%, .5);
  box-shadow: 0px 2px 3px -1px rgba(0, 0, 0, 0.3);
  transition: .3s ease;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to left, hsla(348, 96%, 69%, .8), hsla(39, 100%, 63%, 0.8));
    box-shadow: 0 4px 4px rgba(0,0,0,.25);
  }
  &:active {
    background: linear-gradient(to left, hsla(348, 86%, 49%, .8), hsla(39, 90%, 43%, 0.8));
    -webkit-transform: translate(0px, 2px);
    transform: translate(0px, 2px);
    border-bottom: none;
    box-shadow: none;
  }

  @media(max-width: 900px) {
    /* margin: 0; */
    /* font-size: 16px; */
    &:hover {
      background: linear-gradient(to left, hsla(348, 86%, 59%, .8), hsla(39, 100%, 63%, 0.8));
      box-shadow: 0px 2px 3px -1px rgba(0, 0, 0, 0.3);
    }
  }
`;

const PrimaryButton = styled(Link)`
  display: grid;
  /* grid-column: 1 / -1; */
  /* grid-row: 3 / 4; */
  margin: 1em;
  font-size: 16px;
  width: 8em;
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


const Spacer = styled.div`
  grid-column: 1 / -1;
  width: 100%;
  margin: 1%;

   @media(max-width: 900px) {
     display: none;
  }
`;

const Testimonial = styled.div`
font-style: italic;
font-size: 22px;
font-weight: 200;
line-height: 32px;
letter-spacing: 1.55px;
text-align: center;

@media (max-width: 1100px) {
    font-size: 18px;
  }
`;

// HELPER COMPONENTS

const SVGArrowRight = () => (
  <CTAButton className="arrow"><CTAButtonText>LEARN MORE</CTAButtonText>
    <svg style={{ width: '30px', height: '30px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 453.5 270">
      <g id="Layer_2" data-name="Layer 2">
        <path id="arrow-head" fill="none" stroke="#fff" strokeWidth="20" d="M318.5 10l125 125-125 125" strokeLinecap="round" strokeLinejoin="round" />
        <path id="arrow-body" fill="white" stroke="white" strokeWidth="" strokeMiterlimit="0" d="M433 144.5H10a10 10 0 0 1 0-20h423a10 10 0 0 1 0 20z" />
      </g>
    </svg>
  </CTAButton>
);

const RetailButton = () => (
  <InternalCTAButton to='/pricelist/' className="arrow">
    <CTAButtonText>PRICE LIST</CTAButtonText>
    <svg className="svg-left-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 453.5 270">
      <g id="Layer_2" data-name="Layer 2">
        <path id="arrow-head" fill="none" stroke="#fff" strokeWidth="20" d="M318.5 10l125 125-125 125" strokeLinecap="round" strokeLinejoin="round" />
        <path id="arrow-body" fill="white" stroke="white" strokeWidth="" strokeMiterlimit="0" d="M433 144.5H10a10 10 0 0 1 0-20h423a10 10 0 0 1 0 20z" />
      </g>
    </svg>
  </InternalCTAButton>
);

const ContactButton = () => (
  <CTAButton href='#contact' className="arrow">
    <CTAButtonText>CONTACT US</CTAButtonText>
    <svg className="svg-left-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 453.5 270">
      <g id="Layer_2" data-name="Layer 2">
        <path id="arrow-head" fill="none" stroke="#fff" strokeWidth="20" d="M318.5 10l125 125-125 125" strokeLinecap="round" strokeLinejoin="round" />
        <path id="arrow-body" fill="white" stroke="white" strokeWidth="" strokeMiterlimit="0" d="M433 144.5H10a10 10 0 0 1 0-20h423a10 10 0 0 1 0 20z" />
      </g>
    </svg>
  </CTAButton>
);

const UpArrow = () => (
  <a href="#" className='arrow up-button'>
    <svg className='up-arrow' style={{ width: '30px', height: '30px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 453.5 270">
      <g id="Layer_2" data-name="Layer 2">
        <path id="arrow-head" fill="none" stroke="hsla(187, 5%, 33%, 1)" strokeWidth="20" d="M318.5 10l125 125-125 125" strokeLinecap="round" strokeLinejoin="round" />
        <path id="arrow-body" fill="hsla(187, 5%, 33%, 1)" stroke="hsla(187, 5%, 33%, 1)" strokeWidth="" strokeMiterlimit="0" d="M433 144.5H10a10 10 0 0 1 0-20h423a10 10 0 0 1 0 20z" />
      </g>
    </svg>
  </a>
);

export { Wrapper, Title, SubTitle, Copy, Card, CTAButton, CTAButtonText, Testimonial, SVGArrowRight, RetailButton, Image, ImageWrapper, Spacer, UpArrow, PrimaryButton, ContactButton };
