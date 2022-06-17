import { startTransition, useDeferredValue, useState } from "react";

const Item = ({text}) => {
  const a = useDeferredValue(text);
  return <li>{a}</li>
}

function App() {
  const len = 30;
  
  return (
    <>
      <ul>
        {Array(len).fill(0).map((_, i) => <Item text={i} />)}
      </ul>
    </>
  );
}

export default App;