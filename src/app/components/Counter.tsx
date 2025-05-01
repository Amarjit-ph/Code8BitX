'use client';

import { useEffect, useState } from 'react';

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const storedCount = localStorage.getItem('visitor_count');
    let visitCount: number;

    if (storedCount) {
      visitCount = parseInt(storedCount, 10);
    } else {
      // Fake random start between 500 and 1500
      visitCount = Math.floor(Math.random() * 1000) + 500;
    }

    visitCount += 1;
    localStorage.setItem('visitor_count', visitCount.toString());
    setCount(visitCount);
  }, []);

  return (
    <div className="p-4 bg-white border shadow rounded text-center max-w-xs mx-auto mt-10">
      <h2 className="text-lg font-semibold mb-2">Visitor Count</h2>
      {count !== null ? (
        <p className="text-2xl font-bold">{count}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
