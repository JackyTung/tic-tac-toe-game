import React from "react";

import CountDown from "@/components/CountDown/index.jsx";
import CustomCheckBox from "@/components/CustomCheckBox/index.jsx";
import { StyledContent, StyledTitle } from "./styles";
const SvgPlayGround = () => {
  return (
    <div>
      <StyledTitle>This is SvgPlayGround</StyledTitle>
      <StyledContent>
        <CustomCheckBox />
        <CountDown />
      </StyledContent>
    </div>
  );
};

export default SvgPlayGround;
