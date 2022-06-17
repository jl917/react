import { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count+1)}>set value</button>
//     </div>
//   )
// }

function App() {
  const len = 30000;
  return (
    <ul>
      {Array(len).fill(0).map((_, i) => <li>{i}</li>)}
    </ul>
  );
}

export default App;