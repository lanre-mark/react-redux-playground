import * as types from "../actions/actionTypes";

const initialState = {
  gameOver: false,
  drawGame: false,
  currentPlayer: "x",
  spaces: [],
  size: 0,
};

const gameReducers = (state = initialState, action) => {
  // if (action.type === types.TICK_BOARD) {
  //   return state;
  // }
  // if (action.type === types.SELECT_BOARD_SIZE) {
  //   console.log("selected size of board");
  //   // return a brand new state
  //   return {
  //     ...state,
  //     gameOver: false,
  //     drawGame: false,
  //     currentPlayer: "x",
  //     spaces: [...Array(action.payload ** 2).keys()].map((d) => null),
  //     size: action.payload,
  //   };
  // }
  // return state;
  switch (action.type) {
    case types.TICK_BOARD:
      return state;
    case types.SELECT_BOARD_SIZE:
      console.log("selected size of board");
      // return a brand new state
      return {
        ...state,
        gameOver: false,
        drawGame: false,
        currentPlayer: "x",
        spaces: [...Array(action.payload ** 2).keys()].map((d) => null),
        size: action.payload,
      };
    default:
      return state;
  }
};

export default gameReducers;
