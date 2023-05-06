import styled from '@emotion/styled';

export const Box = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Button = styled.button`
  width: 80px;
  height: 30px;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 600;
  border-radius: 4px;
  border: none;
  box-shadow: 0px 0px 10px 0px #000000bf;

  cursor: pointer;

  &:hover {
    background-color: #959292;
    color: white;
  }
`;
