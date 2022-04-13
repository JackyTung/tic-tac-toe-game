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

  .base-timer__path-remaining {
    /* Just as thick as the original ring */
    stroke-width: 7px;

    /* Rounds the line endings to create a seamless circle */
    stroke-linecap: round;

    /* Makes sure the animation starts at the top of the circle */
    transform: rotate(90deg);
    transform-origin: center;

    /* One second aligns with the speed of the countdown timer */
    transition: 1s linear all;

    /* Allows the ring to change color when the color value updates */
    stroke: currentColor;
  }

  .base-timer__svg {
    /* Flips the svg and makes the animation to move left-to-right */
    transform: scaleX(-1);
  }
`;
