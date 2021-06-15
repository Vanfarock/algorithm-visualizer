import styled from 'styled-components';
import ItemState from '../../algorithms/sort/itemState';

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  flex: 1;

  width: 90%;
  height: 100px;
  max-height: 100vh;
  
  margin: 30px auto;
  border: 1px solid black;

  & > div:not(:last-of-type) {
    margin-right: 5px;
  }
`;

type BarProps = {
  height: string,
  state: ItemState,
};

const getBarColor = (state: ItemState): string => {
  if (state === ItemState.Active) {
    return 'blue';
  } if (state === ItemState.Inactive) {
    return 'red';
  } if (state === ItemState.Sorted) {
    return 'green';
  }
  return 'black';
};

export const Bar = styled.div<BarProps>`
  width: 100%;
  height: ${(props) => props.height};
  
  background: ${(props) => getBarColor(props.state)};
`;

export const Teste = styled.div.attrs<BarProps>((props) => ({
  style: {
    height: props.height,
    background: getBarColor(props.state),
  },
}))`width: 100%;`;
