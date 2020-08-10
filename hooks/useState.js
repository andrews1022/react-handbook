// Offical doc page: https://reactjs.org/docs/hooks-state.html

// First, import the useState hook
import React, { useState } from 'react';

// Example:
function Counter() {
  // useState ALWAYS returns an array with 2 values
  // So we can use destructuring and assign those values to variables (constants)
  // The first value is your state. In this case, it is 'count'
  // The second value is a function that allows us to update the state
  const [count, setCount] = useState(0); // What we pass into useState is the default state. In this case, it is 0

  // You can use a function based approach as well:
  const [count, setCount] = useState(() => {
    return 0;
  });
  // If your default state is more complex, then you can use the function version of useState:
  // This is because when you pass in the default state value directly, it gets run EACH TIME the component is re-rendered
  // If you pass something in complex, this could lead to serious performance issues
  // In that case, you would want to pass in a function with the state in the function body, as it will get called only on the FIRST time the component is rendered

  // SIDE NOTE: It is also best practice to use separate useState hooks for managing different pieces of state
  // This way data does not clash, and you don't come into any unforseen errors
  // This approach also makes it easier to manage the individual pieces of state state

  // Here, we create a function decrement, which can be called
  const decrement = () => {
    // Inside, we call setCount to update the state
    // Here, we simply take the existing state and subtract one
    // This will cause the component to re-render
    setCount(count - 1); // This is actually not the best way to write it (see below)

    // When using the setState function inside class based components, you might remember you can pass in a function
    // We can do the same here with setCount
    setCount((previousCount) => {
      previousCount - 1;
    });
    // Anytime you are modifying state where you are using the previous state value to create the new value, you NEED to use the function version to set the state
  };

  const increment = () => {
    setCount((previousCount) => {
      previousCount + 1;
    });
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
