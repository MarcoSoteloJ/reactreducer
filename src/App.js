
import  React,{ useReducer } from 'react';
import './App.css';
import ComponentA from './Component A'
import ComponentB from './Component B'
import ComponentC from './Component C'

export const CountContext = React.createContext();

const initialState = 0
const reducer = (state, action) =>  {
  switch(action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

function App() {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <CountContext.Provider value={{countState: count, countDispatch: dispatch}} >
   
    <div>
      Count - {count}
    <ComponentA />
    <ComponentB />
    <ComponentC />
    </div>
   
   
    </CountContext.Provider>
  );
}

export default App;
