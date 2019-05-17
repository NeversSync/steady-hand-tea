import styled from "styled-components";
// import backgroundImg from '../../../public/assets/img/tetsu-landing-img-tall.jpg';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100vh;
`;

const Background = styled.div`
  background: linear-gradient(hsla(0,0%,0%,0) 0%, hsla(0,0%,50%,.3) 100%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

export { Background, Wrapper };
