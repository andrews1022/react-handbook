// Parent component:
class Parent extends React.Component {
  render() {
    return <Child heading={'Hello World!'} />;
  }
}

// To access the props in the Child component, declare them in your functional component callback
const Child = (props) => {
  return (
    <div>
      <h2>{props.heading}</h2>
    </div>
  );
};
