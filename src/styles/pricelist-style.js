import styled from 'styled-components';
import { Wrapper } from '../styles/landing-style';
import { Card } from '../components/Helpers';

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
`;

const TableBodyWrapper = styled.tbody`
  display: grid;
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
  /* margin: .25em; */
  padding: .5em;
  /* box-shadow: 1px 1px 5px grey; */
  display: grid;
  align-content: center;
`;

export { PricelistContainer, PricelistWrapper, TableBodyWrapper, TableRow, CategoryTitle, TableCell, PricelistCard };
