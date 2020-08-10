// You can create functional components in 1 of 2 ways:

function Example1() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

const Example2 = () => {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
};

// With arrow functions, you could even shorten it down to this, as they return is implied
const Example2 = () => (
  <div>
    <h1>Hello World!</h1>
  </div>
);
