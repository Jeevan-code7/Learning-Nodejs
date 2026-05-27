import { createStore } from "./redux.js"


const incButton = document.getElementById("inc");

const reducer = (state, action) => {
    console.log(state, action)
    if (action.type == "function") {
        return { count: state.count + 1 }
    }
    return { count: 10 }
}

/*
 1st time reducer returns the redux state
 2. state anedhi second time nunchi appicable avthadhi ante state always points to the previous state 
 3. reducer pani enti ante oka new state ni return cheyyali 

 {
   getState() : f()  // returns the latest state of the store 
   dispatch : f(action) // dispatches actions to the reducers 
   subscribe : f(listner) //  
   replaceReducer : f(newReducer)  
 }

*/


const store = createStore(reducer);

console.log(store.getState());

const subscriber = (listner) => {

}

store.replaceReducer(subscriber)

incButton.addEventListener("click", (e) => {
    state.dispatch({ type: "increment" })
})