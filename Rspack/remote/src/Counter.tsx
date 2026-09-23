import { useState } from "react";

import "./index.css";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4 mt-4 text-lg">
      <button
        className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
        onClick={() => setCount((c) => c - 1)}
      >
        -
      </button>
      <span>{count}</span>
      <button
        className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
        onClick={() => setCount((c) => c + 1)}
      >
        +
      </button>
    </div>
  );
};
