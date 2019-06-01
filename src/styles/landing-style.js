import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100vh;
  background: url('https://res.cloudinary.com/nicky-cloudinary/image/upload/f_auto,q_auto:best/v1559350545/steady-hand-tea/IMG_7239.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

const Background = styled.div`
  background-color: hsla(23, 8%, 19%, 0.4);
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100vh;
  justify-items: center;
  align-items: center;
`;

const Social = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  align-items: center;
  justify-items: space-around;
`;

export { Background, Wrapper, Social };
