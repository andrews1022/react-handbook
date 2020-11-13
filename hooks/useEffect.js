// useEffect is meant to replace a couple of life cycle methods from class based components
// useEffect gets is name based on the fact that is meant to handle side effects in your application
// the most common use case is fetching data (by some means) from an api (or local source) (example below)
// another common use case could be handling event listeners (example below)
// regardless, when we have an 'effect' take place, we want our app to re-render based on that effect

// to start, import it along with react as a named import:
import React, { useEffect, useState } from 'react';

// the useEffect hook takes in a function
useEffect(() => {
	// code to execute each time
});

// useEffect also takes an array of arguments
useEffect(() => {
	// code to execute each time
}, []);
// any time one of the arguments changes in this array, it'll cause your effect to re-run
// if you never want your effect to re-render itself (essentially only run on component mount (1st time rendering/appearing on screen)), then you can leave it empty

// basic example of fetching data from api (specifically, the pokemon api, getting the first 20 pokemon)
useEffect(() => {
	const getPokemon = async () => {
		try {
			const response = await fetch('https://pokeapi.co/api/v2/pokemon');
			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	// run the above function each time
	getPokemon();
}, []);

// you could also have the getPokemon function outside the effect
// NOTE: this would limit/affect what you can place inside the [] of arguments
useEffect(() => {
	getPokemon();
}, []);

const getPokemon = async () => {
	try {
		const response = await fetch(currentPageUrl);
		const data = await response.json();

		// set various state values
		setNextPageUrl(data.next);
		setPrevPageUrl(data.previous);
		setPokemon(data.results);
		setIsLoaded(true);
	} catch (error) {
		console.log(error);
	}
};

// another example: using event listeners
// here, we want to dynamically show the width the window
// in this example, we also introduce the clean up part of useEffect
const ComponentExample = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const handleWindowResize = () => {
		setWindowWidth(windowWidth.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', handleWindowResize);

		// this return is the cleanup
		// this code is actually ran BEFORE any of the code above it
		// this is done so that every time this useEffect gets ran, whatever is in the return gets ran FIRST to cleanup whatever happened last time
		// so with event listeners, it's wise to remove the same event listener
		// also worth noting, the return will be called ANY TIME the component unmounts
		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	return (
		<div>
			<p>The width of the window is: {windowWidth}px wide</p>
		</div>
	);
};

// for cleaning up fetch requests like above, we can use the built in DOM API "AbortController"
useEffect(() => {
	// AbortController allows us to cancel fetch requests
	// this is an alternative to using axios with its built in cancel + cancelToken functionality
	const abortController = new AbortController();

	const getPokemon = async () => {
		try {
			const response = await fetch(currentPageUrl);
			const data = await response.json();

			// set various state values
			setNextPageUrl(data.next);
			setPrevPageUrl(data.previous);
			setPokemon(data.results);
			setIsLoaded(true);
		} catch (error) {
			console.log(error);
		}
	};

	// run the above function each time
	getPokemon();

	// clean up any previous api calls to avoid race conditions
	return () => {
		abortController.abort();
	};
}, []);

// another example would be if you subscribe to an API, then the cleanup should UNSUBSCRIBE you from that api, too

// in summary, useEffect is best used when you want to have a side effect occur:
// - component mounts
// - component unmounts
// - when a variable changes
// - when a certain piece of state changes
// - when props change

// or ANYTHING else updates, and you want do something in response, THAT is what useEffect is going to be used for
