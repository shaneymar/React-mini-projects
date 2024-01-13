import "./App.css";
//import ComponentA from "./components/ComponentA";
// import HookEffect from "./components/HookEffect";
// import ArraysState from "./components/ArraysState";
// import FormState from "./components/FormState";
// import ObjectArray from "./components/ObjectArray";
// import ObjectState from "./components/ObjectState";
// import { createContext } from "react";
// import ComponentC from "./components/ComponentC";

//export const UserContext = createContext();
import {  useReducer, useRef} from "react";
import UseFetch from "./components/UseFetch";

const App = () => {

  const [data] = UseFetch("https://jsonplaceholder.typicode.com/todos")

 //const name="Shankar";

   const initialState = {count: 0};

  const reducer = (state, action) => {
    switch(action.type){
      case "increment" : return{ count: state.count + 1};
      case "decrement":  return{ count: state.count - 1};
      case "reset" : return { count: 0}
      default:  return state;
    }

  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const inputElement = useRef(null);

  const focusChange = () => {
    console.log(inputElement);
    inputElement.current.focus();
    inputElement.current.value = "Shankar"
  }

  return (
    <div>
      {/* <ArraysState />
      <ObjectState />
      <ObjectArray />
      <FormState /> 
  <HookEffect /> 
  <UserContext.Provider value={name}>
    <ComponentC />
  </UserContext.Provider>*/}
  <h1>{state.count}</h1>
  <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
  <button onClick={() => dispatch({type:"decrement"})}>Decrement</button>
  <button onClick={() =>dispatch({type:"reset"})}>Reset</button><br/>
    <hr/>
    <input type="text" ref={inputElement} />
    <button onClick={focusChange}>Focus and Change Name</button>

    <hr/>
    {
            data && data.map((item) => (
                <p key={item.id}>{item.title}</p>
            ))
        }
    </div>
  );
};

export default App;
