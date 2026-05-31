import { useCallback, useState } from "react";

const refs = [];
const UseCallBack = () => {
  /*
          useCallback(fn, dependency)  :  it returns the cached fn
        
        */

  const [count, setCount] = useState(0);

  const callback = useCallback(() => {
    setCount(count + 1);
  }, [count < 2 ? 0 : count]);

  refs.push(callback);

  if (refs.length === 3) {
    console.log(refs);
    console.log(refs[0] === refs[1]);
    console.log(refs[0] === refs[2]);
  }
  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={callback}>increment</button>
    </div>
  );
};

export default UseCallBack;
