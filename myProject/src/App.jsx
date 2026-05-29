import { useRef, useState } from "react";

const list = [];
export default function App() {
  /**
   * useRef Hook
   * Need of useRef Hook
   * signature of useRef Hook & it's functionality
   * Real time usecase of useRef
   *
   *
   *  useRef(intialValue) => {current : intialValue }
   *  No re-render takes place in useRef
   */
  const [count, setCount] = useState(0);

  const reference = useRef({
    name: "Jeevan",
    age: 22,
  });

  list.push(reference);

  if (list.length === 2) {
    console.log(list);
    console.log(list[0] === list[1]);
  }

  function handleClick() {
    setCount((prev) => prev + 1);
  }
  // 1st render user = #400
  // 2nd render user = #500
  // to solve this problem useRef is used because it hold the same memory address entire component life cycle
  return (
    <>
      <h1>count : {count}</h1>
      <button onClick={handleClick}>increment</button>
    </>
  );
}
