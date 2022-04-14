import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  100% {
    r: 25;
  }
`;

export const StyledContainer = styled.div`
  width: 250px;
  height: 250px;

  svg {
    circle {
      fill: ${({ theme }) => theme.colors?.primary?.main};
      animation: ${pulse} 2s alternate infinite;
    }
  }
`;

const moveCircle = keyframes`
  50% {
    cy: 150;
    r: 13;
  }
`;

export const StyledMultCircleContainer = styled.div`
  width: 800px;
  height: 450px;
  svg {
    .shape {
      cy: 50;
      r: 20;
      animation: ${moveCircle} 1250ms ease-in-out both infinite;

      &:nth-child(1) {
        cx: 20;
        fill: #6e40aa;
      }

      &:nth-child(2) {
        cx: 80;
        fill: #4c6edb;
        animation-delay: 100ms;
      }

      &:nth-child(3) {
        cx: 140;
        fill: #24aad8;
        animation-delay: 200ms;
      }

      &:nth-child(4) {
        cx: 200;
        fill: #1ac7c2;
        animation-delay: 300ms;
      }

      &:nth-child(5) {
        cx: 260;
        fill: #1ddea3;
        animation-delay: 400ms;
      }
    }
  }
`;
