import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 300px;
  height: 300px;
  align-items: center;
  margin-top: 20px;
  position: relative;

  .base-timer__circle {
    fill: none;
    stroke: none;
  }

  .base-timer__path-elapsed {
    stroke-width: 6px;
    stroke: grey;
  }

  .base-timer__label {
    position: absolute;

    /* Size should match the parent container */
    width: 300px;
    height: 300px;

    /* Keep the label aligned to the top */
    top: 0;

    /* Create a flexible box that centers content vertically and horizontally */
    display: flex;
    align-items: center;
    justify-content: center;

    /* Sort of an arbitrary number; adjust to your liking */
    font-size: 48px;
  }
`;
