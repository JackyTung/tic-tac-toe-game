import React from "react";

import AnimateCircle, {
  AnimateMultiCircle,
} from "@/components/AnimateCircle/index.jsx";
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
        <AnimateCircle />
        <AnimateMultiCircle />
      </StyledContent>
    </div>
  );
};

export default SvgPlayGround;
