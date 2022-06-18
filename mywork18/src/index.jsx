import React, { startTransition } from 'react'
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('app'));

startTransition(() => {
  root.render(<App />);
})

// root.render(<App />);

// createRoot(document.getElementById('app')).render(<React.StrictMode></React.StrictMode>)