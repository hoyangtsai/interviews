import "./styles.css";
import { useState, useEffect, useRef, useCallback } from "react";

const FRUITS = ["🍌", "🍎", "🍊", "🍉", "🥭"];

// Method-1: use css pseudo-element content for emoji and keyframe animation
// Method-2: use requestAnimationFrame, carefully with js evnet loop.
// https://css-tricks.com/using-requestanimationframe-with-react-hooks/

// custom react hook
const useRaf = (nextFrame) => {
  const requestRef = useRef();
  const startTimeRef = useRef();
  const callback = (time) => {
    if (!startTimeRef.current) startTimeRef.current = time;
    const progress = time - startTimeRef.current;
    nextFrame(progress);
    requestRef.current = requestAnimationFrame(callback);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(callback);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);
};

// Method-2
const Emoji = (props) => {
  const [fruitId, setFruitId] = useState(0);
  // const requestRef = useRef();
  // const startTimeRef = useRef();
  const progressRef = useRef();

  const changeFruit = (progress) => {
    if (!progressRef.current) progressRef.current = progress;

    if (progress - progressRef.current >= 2000) {
      progressRef.current = progress;
      setFruitId((prev) => {
        if (prev === FRUITS.length - 1) return 0;
        return prev + 1;
      });
    }
  };

  useRaf(changeFruit);

  // const animation = (time) => {
  //   if (!startTimeRef.current) startTimeRef.current = time;
  //   const elapse = time - startTimeRef.current;
  //   changeFruit(elapse);
  //   requestRef.current = requestAnimationFrame(animation);
  // };

  // useEffect(() => {
  //   requestRef.current = requestAnimationFrame(animation);
  //   return () => cancelAnimationFrame(requestRef.current);
  // });

  return (
    <span className="emoji" {...props}>
      {FRUITS[fruitId]}
    </span>
  );
};

// Method-1
const Emoji2 = (props) => {
  return <span className="emoji animate" {...props}></span>;
};

export default function App() {
  const [emojis, setEmojis] = useState([{ left: 0, top: 0 }]);

  function handleClick(e) {
    const rect = e.target.getBoundingClientRect();
    const { clientX, clientY } = e;

    setEmojis((prev) => [
      ...prev,
      {
        left: clientX - rect.left,
        top: clientY - rect.top
      }
    ]);
  }

  return (
    <div className="App">
      <div className="container" onClick={handleClick}>
        {emojis.map((e, i) =>
          e.left && e.top ? <Emoji key={i} style={e} /> : <Emoji key={i} />
        )}
        <Emoji2 style={{ left: 0, top: 0 }} />
      </div>
    </div>
  );
}
