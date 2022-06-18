function App() {
  const len = 30000;
  
  return (
    <>
      <ul>
        {Array(len).fill(0).map((_, i) => <li>{i}</li>)}
      </ul>
    </>
  );
}

export default App;