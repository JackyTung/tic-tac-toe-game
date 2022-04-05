import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 0.5em;
  border-radius: 0.3em;
  width: 200px;
  box-shadow: 7px 7px 5px rgba(0, 0, 0, 0.04),
    -7px -7px 5px rgba(255, 255, 255, 0.8);
  border: 2px solid rgb(235, 235, 235);

  input[type="checkbox"] {
    display: none;
    pointer-events: none;

    & + label {
      cursor: pointer;
      font-size: 0.8em;
      display: grid;
      grid-template-columns: auto 3fr;

      svg {
        stroke-width: 5;
        stroke: black;
        width: 2em;
        fill: white;

        .box {
          stroke-dasharray: 320;
          stroke-dashoffset: 0;
          fill: white;
        }

        .check {
          stroke-dasharray: 70;
          stroke-dashoffset: 70;
          fill: none;
        }
      }

      span {
        padding-top: 0.3em;
      }
    }

    &:checked + label {
      .box {
        stroke-dashoffset: 320;
        transition: stroke-dashoffset 0.3s linear;
      }

      .check {
        stroke-dashoffset: 0;
        transition: stroke-dashoffset 0.3s linear;
      }
    }
  }
`;
