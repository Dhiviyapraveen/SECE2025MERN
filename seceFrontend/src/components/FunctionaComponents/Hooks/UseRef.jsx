import { useEffect, useState, useRef } from "react";

const UseRef = () => {
  const [text, setText] = useState(""); 
  const prevRender = useRef(); 

  useEffect(() => {
    prevRender.current = text;
  }, [text]);

  return (
    <div>
      <h2>This page is meant for useRef Hook.</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)} 
      />
      <h4>The current text is: {text}</h4>
      <h5>The previous render text was: {prevRender.current}</h5>
    </div>
  );
};

export default UseRef;
