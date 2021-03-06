import React from "react";
// import { render } from "react-dom";
import { CSSTransition } from "react-transition-group";
import X from "./OptionX.jsx";
import O from "./OptionO.jsx";

// ----------
// Game Board
// ----------

const GameBoard = (props) => {
  // console.log("GameBoard props::", props);
  return (
    <button
      onClick={(e) => {
        // !props.symbol && props.playSymbol !== props.computeSymbol  For integrating Computer Plays
        !props.symbol && props.playSymbol !== props.computeSymbol
          ? props.onPlayGame(e, props.index)
          : null;
      }}
      className={`
      game-board__button
      ${props.symbol ? "game-board__button--disabled" : ""}
    `}
    >
      <CSSTransition
        in={props.symbol === "x"}
        timeout={700}
        classNames={"x-"}
        exit={false}
        mountOnEnter={true}
      >
        <X />
      </CSSTransition>

      <CSSTransition
        in={props.symbol === "o"}
        timeout={700}
        classNames={"o-"}
        exit={false}
        mountOnEnter={true}
      >
        <O />
      </CSSTransition>
    </button>
  );
};

export default GameBoard;
