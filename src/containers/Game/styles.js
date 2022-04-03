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
