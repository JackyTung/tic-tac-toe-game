import React from "react";

import { StyledContainer, StyledTitle } from "./styles";
import TicTacToe from "./TicTacToe/index.jsx";

const Game = () => {
  return (
    <StyledContainer>
      <StyledTitle>This is Tic Tac Toe Game</StyledTitle>
      <TicTacToe />
    </StyledContainer>
  );
};

export default Game;
