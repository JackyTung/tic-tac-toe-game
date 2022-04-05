import React from "react";

import CustomCheckBox from "@/components/CustomCheckBox/index.jsx";
import { StyledContent, StyledTitle } from "./styles";
const SvgPlayGround = () => {
  return (
    <div>
      <StyledTitle>This is SvgPlayGround</StyledTitle>
      <StyledContent>
        <CustomCheckBox />
      </StyledContent>
    </div>
  );
};

export default SvgPlayGround;
