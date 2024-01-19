import React, { useEffect, useState } from 'react';

export default function App() {
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    const timer =
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <div>
      Countdown to summer:
      <br />
      {counter}
    </div>
  );
}

// useEffect(<function>, <dependency>)
