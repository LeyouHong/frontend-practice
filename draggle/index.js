import React from "react";
import "./style.css";

export default function App() {
  const [rectPos1, setRectPos1] = React.useState([0, 0]);
  const [rectPos2, setRectPos2] = React.useState([200, 0]);
  const [originPos, setOriginpos] = React.useState([0, 0]);
  const [zIndex1, setZIndex1] = React.useState(0);
  const [zIndex2, setZIndex2] = React.useState(1);

  const getStyle1 = () => {
    return {
      left: rectPos1[0],
      top: rectPos1[1],
      zIndex: zIndex1,
      opacity: 0.5,
    };
  };

  const getStyle2 = () => {
    return {
      left: rectPos2[0],
      top: rectPos2[1],
      zIndex: zIndex2,
      opacity: 0.5,
    };
  };

  const onDragStartHandler = (e, id) => {
    console.log(e.clientX, e.clientY);
    setOriginpos([e.clientX, e.clientY]);
    if (id === 1) {
      setZIndex1(zIndex2 + 1);
    } else {
      setZIndex2(zIndex1 + 1);
    }
  };

  const onDragEndHandler = (e, id) => {
    console.log(e.clientX, e.clientY);
    const [distX, distY] = [e.clientX - originPos[0], e.clientY - originPos[1]];
    if (id === 1) {
      rectPos1[0] += distX;
      rectPos1[1] += distY;
      setRectPos1([...rectPos1]);
    } else {
      rectPos2[0] += distX;
      rectPos2[1] += distY;
      setRectPos2([...rectPos2]);
    }
  };

  const getOverlap = () => {
    const dx = Math.abs(rectPos1[0] - rectPos2[0]);
    const dy = Math.abs(rectPos1[1] - rectPos2[1]);
    if (dx >= 100 || dy >= 100) return "0%";

    const area1 = dx * dy;
    const area2 = dy * (100 - dx);
    const area3 = dx * (100 - dy);
    return `${~~(((100 * 100 - area1 - area2 - area3) / 10000) * 100)}%`;
  };

  return (
    <div className="wrapper">
      <div
        className="rect1"
        draggable
        onDragStart={(e) => onDragStartHandler(e, 1)}
        onDragEnd={(e) => onDragEndHandler(e, 1)}
        style={getStyle1()}
      >
        1
      </div>
      <div
        className="rect2"
        draggable
        onDragStart={(e) => onDragStartHandler(e, 2)}
        onDragEnd={(e) => onDragEndHandler(e, 2)}
        style={getStyle2()}
      >
        2
      </div>
      <div>{getOverlap()}</div>
    </div>
  );
}
