import styled from "styled-components";

export const StyledContainer = styled.div`
  position: relative;

  & > *:not(:first-child) {
    margin-top: 30px;
  }
`;

export const StyledTitle = styled.div`
  font-size: 32px;
  font-weight: 900;
`;

export const StyledText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #7fc6a4;
  color: white;
  border: none;

  &:hover {
    background-color: #d6f8d6;
    color: gray;
  }
`;
