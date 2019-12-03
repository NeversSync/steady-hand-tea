import styled from 'styled-components';
import { Wrapper } from '../styles/landing-style';
import { Card, SubTitle } from '../components/Helpers';

const PricelistContainer = styled(Wrapper)`
  width: unset;
  grid-template-columns: unset;

  @media (min-width: 900px) {
    grid-template-rows: auto;
    background-size: contain;
    background-repeat: repeat-y;
  }
`;

const PricelistWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: white;
  justify-self: center;
  width: 80vw;
  /* padding: 1em; */
  box-shadow: 0 5px 15px rgba(50, 50, 93, 0.2), 0 3px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 0;
  margin-bottom: 1em;
`;

const PricelistCard = styled.div`
  display: grid;
  grid-column: 1 / -1;
  width: 100vw;
  justify-content: center;
  padding: 0px;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.7) ;
  background: hsla(23, 10%, 39%, 0.7);
  border-radius: 4px;
  text-align: center;
  padding-bottom: 1em;
`;

const PricelistSubtitle = styled(SubTitle)`
  color: var(--dark-text);
  grid-column: 1 / -1;
  justify-self: center;
  padding: 1em .5em;

  @media(min-width: 900px) {
    width: 50%;
  }
`;

const TableBodyWrapper = styled.tbody`
  display: grid;
  color: var(--dark-text);
  `;

const TableRow = styled.tr`
  display: grid;
  grid-template-columns: 1fr;
  margin: .5em;
  line-height: 29px;

  @media (min-width: 900px) {
  grid-template-columns: 2fr 1fr 1fr 1fr;
  }
`;

const CategoryTitle = styled.h3`
  font-weight: 600;
  display: grid;
  grid-column: 1 / -1;
  font-size: 1.5em;
`;

const TableCell = styled.td`
  padding: .5em;
  display: grid;
  align-content: center;
`;

export { PricelistContainer, PricelistWrapper, TableBodyWrapper, TableRow, CategoryTitle, TableCell, PricelistCard, PricelistSubtitle };
