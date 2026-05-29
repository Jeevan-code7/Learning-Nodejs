import { useRef } from "react";

export default function App() {
  const value = useRef(null);

  return (
    <>
      <h1>useRef : {<h1>{value}</h1>}</h1>
    </>
  );
}
