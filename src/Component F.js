import React , {useContext} from "react";
import {CountContext} from "./App";

function ComponentF(){

    const countContext = useContext(CountContext)
    return (
        <div>
            ComponentF
            <button onClick={() => countContext.countDispatch('increment')}>increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>reset</button>
        </div>
    )
}

export default ComponentF