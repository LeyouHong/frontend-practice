import React from "react";

import "./style.css";

function App() {
  const stars = [1, 2, 3, 4, 5];
  const [selectIdx, setSelectedIdx] = React.useState(-1);
  const [hoverIdx, setHoverIdx] = React.useState(-1);

  const onClickHandler = (e) => {
    const id = e.target?.dataset.id;
    if (id >= 0) {
      if (id == selectIdx) {
        setSelectedIdx(-1);
      } else {
        setSelectedIdx(id);
      }
    }
  };

  const getClassName = (idx) => {
    const activeIdx = hoverIdx !== -1 ? hoverIdx : selectIdx;
    return idx <= activeIdx ? "circle-red" : "circle";
  };

  const onHover = (idx) => {
    setHoverIdx(idx);
  };

  const onLeave = () => {
    setHoverIdx(-1);
  };

  return (
    <>
      <div
        className="container"
        onClick={onClickHandler}
        onMouseLeave={() => onLeave()}
      >
        {stars.map((k, v) => {
          return (
            <div
              data-id={k}
              key={k}
              className={getClassName(k)}
              onMouseEnter={() => onHover(k)}
            >
              {v}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
