import styled from 'styled-components';

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
  height: string
};

export const Bar = styled.div<BarProps>`
  width: 100%;
  height: ${(props) => props.height};
  
  background: red;
`;
