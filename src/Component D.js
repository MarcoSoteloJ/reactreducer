import React , {useContext} from "react";
import {CountContext} from "./App";

function ComponentD(){

    const countContext = useContext(CountContext)
    return (
        <div>
            ComponentD
            <button onClick={() => countContext.countDispatch('increment')}>increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>reset</button>
        </div>
    )
}

export default ComponentD