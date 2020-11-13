// redux site: https://redux.js.org/
// notes below taken from intro docs: https://redux.js.org/tutorials/fundamentals/part-1-overview

// Redux Libraries and Tools
// - React-Redux
// - Redux Toolkit (recommended approach for writing Redux logic)

// Prerequisites
// - Familiarity with HTML & CSS
// - Familiarity with ES6 syntax and features
// - Understanding of the array and object spread operators
// - Knowledge of React terminology: JSX, State, Function Components, Props, and Hooks
// - Knowledge of asynchronous JavaScript and making AJAX requests

// Redux is a pattern and library for managing and updating application state, using events called "actions"
// Redux helps you manage "global" state - state that is needed across many parts of your application.

// Redux is more useful when:
// - You have large amounts of application state that are needed in many places in the app
// - The app state is updated frequently over time
// - The logic to update that state may be complex
// - The app has a medium or large-sized codebase, and might be worked on by many people

// The center of every Redux application is the 'store'. A 'store' is a container that holds your application's global state.

// A store is a JavaScript object with a few special functions and abilities that make it different than a plain global object:
// - You must never directly modify or change the state that is kept inside the Redux store
// - Instead, the only way to cause an update to the state is to create a plain 'action' object that describes "something that happened in the application", and then 'dispatch' the action to the store to tell it what happened.
// - When an action is dispatched, the store runs the root 'reducer' function, and lets it calculate the new state based on the old state and the action
// - Finally, the store notifies 'subscribers' that the state has been updated so the UI can be updated with the new data.
