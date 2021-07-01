// Parent component:
const Parent = () => {
	return <Child headingText='Hello World!' />;
};

// To access the props in the Child component, declare them in your functional component callback
const Child = (props) => {
	return (
		<div>
			<h2>{props.headingText}</h2>
		</div>
	);
};

// Since props is an object, we can destructure our props like so:
const Child = ({ headingText }) => {
	return (
		<div>
			<h2>{headingText}</h2>
		</div>
	);
};
