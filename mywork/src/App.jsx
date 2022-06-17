import React, { useState } from 'react';


// export function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h1 onClick={() => setCount(count + 1)}>{count}</h1>
//       <p>123</p>
//       <div>
//         <button>123</button>
//         <button>456</button>
//       </div>
//     </div>
//   );
// }

export function App() {
  const len = 3000;
  return (
    <ul>
      {Array(len).fill(0).map((_, i) => <li>{i}</li>)}
    </ul>
  );
}