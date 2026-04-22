import React, { Component, useCallback } from "react";
import { render } from "react-dom";
// import Hello from './Hello';
import "./style.css";

const { useState, useRef, useEffect, useCallback } = React;

const App = (props) => {
  let [data, setData] = useState([
    { title: "Title1", desc: "1cdsdsfdsvsdewfdew", expand: false },
    { title: "Title2", desc: "2cdsdsfdsvsdewfdew", expand: false },
    {
      title: "Title3",
      desc: "3cdsdsfdsvsdewfdew3cdsdsfdsvsdewfdew3cdsdsfds vsdewfdew3cdsdsfdsvsdewfdew3cdsdsfdsvsdewfdew3cdsdsfdsvsdewfdew3cdsdsfdsv sdewfdew3cdsdsfdsvsdewfdew3cdsdsfdsvsdewfdew3cdsdsfdsvsdewfdew3cdsdsfdsvsdewfdew3cdsdsfdsvsdewfdew3cdsdsfdsvsdewfdew3cdsdsfdsvsdewfdew3cdsds fdsvsdewfdew3cdsds fdsvsdewfdew3 cdsdsfdsvsdew fdew3cdsdsfdsvsdewfdew3 cdsdsfdsvsdewfdew3cdsdsfdsvsdewfdew3 cdsdsfdsvsdewfdew3cdsds fdsvsdewfdew3c dsdsfdsvsdewfdew3cdsdsfdsvsdewfdew3cdsdsfdsvsdewfdew",
      expand: false,
    },
  ]);

  const handler = useCallback(
    (idx) => {
      const val = data[idx].expand;
      data.forEach((item) => {
        item.expand = false;
      });
      data[idx].expand = !val;
      setData([...data]);
    },
    [setData],
  );

  const getCollpase = () => {
    return data.map((item, idx) => {
      return <Unit {...item} idx={idx} handler={handler} />;
    });
  };

  return <div className="wrapper">{getCollpase()}</div>;
};

const Unit = React.memo((props) => {
  const { handler, idx, expand, title, desc } = props;

  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.height = expand
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [expand]);

  return (
    <section>
      <h4 onClick={() => handler(idx)}> {title} </h4>
      <article ref={contentRef} className={expand ? "" : "hide"}>
        {desc}
      </article>
    </section>
  );
});

render(<App />, document.getElementById("root"));
