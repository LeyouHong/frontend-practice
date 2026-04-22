import React from "react";
import "./style.css";

const initState = {
  data: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  player1: false,
  win: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CLICK":
      const newData = [...state.data];
      const [i, j] = action.indexes;
      newData[i][j] = state.player1 ? "X" : "O";
      const win = check(newData);
      return { data: newData, player1: !state.player1, win };
    case "RESET":
      return {
        data: [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
        player1: false,
        win: false,
      };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initState);

  const handleClick = (i, j) => {
    if (!state.win && state.data[i][j] === "") {
      dispatch({ type: "CLICK", indexes: [i, j] });
    }
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div className="grid">
      {state.data.map((row, i) => {
        return row.map((box, j) => {
          return (
            <Box
              key={j}
              i={i}
              j={j}
              data={state.data}
              handleClick={handleClick}
            />
          );
        });
      })}
      <div>{state.win && `${state.player1 ? "PLAYER1" : "PLAYER2"} WIN`}</div>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

const Box = (props) => {
  const { i, j, win, data, handleClick } = props;
  return (
    <div className="box" onClick={() => handleClick(i, j)}>
      {data[i][j]}
    </div>
  );
};

const check = (data) => {
  let combinations = [];
  let diag1 = [];
  let diag2 = [];

  for (let i = 0; i < data.length; i++) {
    let sameRow = [];
    let sameCol = [];
    for (let j = 0; j < data[i].length; j++) {
      sameRow.push(data[i][j]);
      sameCol.push(data[j][i]);
      if (i === j) {
        diag1.push(data[i][j]);
      }
      if (i + j === 2) {
        diag2.push(data[i][j]);
      }
    }
    combinations.push(sameRow);
    combinations.push(sameCol);
  }
  combinations.push(diag1);
  combinations.push(diag2);

  for (let i = 0; i < combinations.length; i++) {
    const allEqual = combinations[i].every(
      (ele) => ele !== "" && ele === combinations[i][0],
    );
    if (allEqual) return true;
  }
  return false;
};
