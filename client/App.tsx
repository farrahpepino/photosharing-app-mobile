
import React from 'react';
import StackNav from './src/navigation/StackNav';

export default function App() {
  const originalLog = console.log;
  console.log = (...args) => {
    if (typeof args[0] === "string" && args[0].includes("heartbeats")) {
      return;
    }
    originalLog(...args);
  };

  return <StackNav />;
}
