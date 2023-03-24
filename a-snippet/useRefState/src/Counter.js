import { useState, useCallback, useEffect, useRef } from "react";

// https://dev.to/scastiel/react-hooks-get-the-current-state-back-to-the-future-3op2?signin=true

const useRefState = (initialValue) => {
  const [state, setState] = useState(initialValue);
  const stateRef = useRef(state);
  useEffect(() => {
    stateRef.current = state;
  }, [state]);
  return [state, stateRef, setState];
};

const Counter = () => {
  const [counter, counterRef, setCounter] = useRefState(0);
  const onButtonClick = useCallback(() => setCounter(counter + 1), [counter]);

  const onAlertButtonClick = useCallback(() => {
    setTimeout(() => {
      alert("Value: " + counterRef.current);
    }, 5000);
  }, []);

  return (
    <div>
      <p>You clicked {counter} times.</p>
      <button onClick={onButtonClick}>Click me</button>
      <button onClick={onAlertButtonClick}>
        Show me the value in 5 seconds
      </button>
    </div>
  );
};

export default Counter;
