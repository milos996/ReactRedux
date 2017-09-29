/*
import { combineReducers, createStore, applyMiddleware } from "redux";

//Reducers
const userReducer = (state={}, action) =>{
      switch (action.type) {
        case "CHANGE_NAME":
              state ={...state, name: action.payload};
          break;
        case "CHANGE_AGE":
                state ={...state, age: action.payload};
          break;
      }

      return state;
};

const tweetsReducer = (state=[], action) =>{
  return state;
}

//middlewares
const error = (store) => (next) => (action) =>{
    try {
      next(action);
    } catch (e) {
        console.log("it's an error!");
    }
}

const logger = (store) => (next) => (action) =>{
    console.log("action fired", action);
    next(action);
}

//Combining reducers
const reducers = combineReducers({
  user : userReducer,
  tweets: tweetsReducer
});

// Combining middlewares
const middleware  = applyMiddleware(logger, error);

//Putting all together
const store = createStore(reducers, middleware);

//when store changes it fires this function
store.subscribe(() => {
  console.log("store changed", store.getState());
});

//Actions that execute
store.dispatch({type: "CHANGE_NAME", payload: "Milos"});
store.dispatch({type: "CHANGE_AGE", payload: 20});
store.dispatch({type: "CHANGE_AGE", payload: 21});
*/
