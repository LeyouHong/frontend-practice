import { useState, useRef } from "react";
import "./styles.css";

export default function App() {
  const [list, setList] = useState([
    "value1",
    "value2",
    "value3",
    "value1",
    "value2",
    "value3",
  ]);
  const divRef = useRef(null);

  const handleOnScroll = () => {
    const element = divRef.current;
    const { scrollTop, scrollHeight, clientHeight } = element;
    if (scrollTop + clientHeight >= scrollHeight - 1) {
      setList([...list, "value1", "value2", "value3"]);
    }
  };

  return (
    <div className="container" onScroll={handleOnScroll} ref={divRef}>
      <ul>
        {list.map((l, k) => {
          return (
            <li key={k} className="list-container">
              {l}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
