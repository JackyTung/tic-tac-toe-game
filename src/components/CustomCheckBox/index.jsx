import React from "react";

import { StyledContainer } from "./styles";

const CustomCheckBox = () => {
  return (
    <StyledContainer>
      <input type="checkbox" name="cb" id="cb" />
      <label htmlFor="cb" id="checkbox">
        <svg viewBox="0 0 100 100">
          <path
            className="box"
            d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"
          />
          <polyline className="check" points="25.5,53.5 39.5,67.5 72.5,34.5 " />
        </svg>
        <span>Show Notes</span>
      </label>
    </StyledContainer>
  );
};

export default CustomCheckBox;
