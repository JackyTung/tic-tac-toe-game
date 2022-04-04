import React from "react";

import useTicTacToe from "@/hooks/useTicTacToe";
import {
  StyledButton,
  StyledContainer,
  StyledText,
  StyledTitle,
} from "./styles";
import TicTacToe from "./TicTacToe/index.jsx";

const CANVAS_SIZE = 360;

const Game = () => {
  const { canvasRef, handleClickGrid, handleReset, winner } = useTicTacToe({
    canvasSize: CANVAS_SIZE,
  });
  return (
    <StyledContainer>
      <StyledTitle>Welcome Tic Tac Toe Game</StyledTitle>
      <StyledText>player1: O</StyledText>
      <StyledText>player2: X</StyledText>
      <TicTacToe canvasRef={canvasRef} handleClickGrid={handleClickGrid} />
      <div>
        <StyledButton onClick={handleReset}>Reset</StyledButton>
      </div>
      {winner && <StyledText>The Winner is {winner}</StyledText>}
    </StyledContainer>
  );
};

export default Game;
