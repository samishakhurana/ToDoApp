import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./todo-list.js";
import store from "./store"
import { Provider } from 'react-redux'

var destination = document.querySelector("#container");
  
ReactDOM.render(
    <div>
        <Provider store={store}>
            <TodoList />
        </Provider>
    </div>,
    destination
);



// Redux Practice Code

// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import { logger } from 'redux-logger'
// import thunk from 'redux-thunk'

// const userReducer = (state={}, action) => {
//     switch(action.type){
//         case "CHANGE_NAME": {
//             return Object.assign({}, state, {'name': action.payload})
//         }
//         case "CHANGE_AGE": {
//             return Object.assign({}, state, {'age': action.payload})
//         }
//         case "EE": {
//             throw new Error("error")
//         }
//         default: {
//             return state;
//         }
//     }
// }

// const tweetsReducer = (state=[], action) => {
//     switch(action.type){
//         case "ADD_TWEET": {
//             return state.concat(action.payload)
//         }
//         case "CHANGE_NAME": {
//             return state.concat("Name changed")
//         }
//         default: {
//             return state;
//         }
//     }
// }

// const reducers = combineReducers({
//     user: userReducer,
//     tweets: tweetsReducer
// })

// const logger = (store) => (next) => (action) => {
//     console.log("action fired ", action)
//     next(action);
// }

// const error = (store) => (next) => (action) => {
//     try {
//         next(action)
//     } catch (e) {
//         console.log("ERRRR!!!", e)
//     }
// }

// const middleware = applyMiddleware(thunk, logger);

// const store = createStore(reducers, {}, middleware)

// store.subscribe(() => {
//   console.log("store changed ", store.getState())
// })

// store.dispatch((dispatch) => {
//     dispatch({type: 'CHANGE_NAME', payload: "Sachit"})
// })

// store.dispatch({type: 'CHANGE_NAME', payload: "Sachit"})
// store.dispatch({type: 'CHANGE_AGE', payload: 22})
// store.dispatch({type: 'ADD_TWEET', payload: "Tweet 1"})
// store.dispatch({type: 'ADD_TWEET', payload: "Tweet 2"})
// store.dispatch({type: 'EE', payload: "Tweet 2"})