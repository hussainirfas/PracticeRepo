import React, { useState } from "react";

function NewComponent(){
    const[counter, setCounter] = useState(0);

    return(
        <>
            <h1 data-testId='counter'>{counter}</h1>
            <button data-testId='increase-button' onClick={()=> setCounter(counter+1)}>Increase</button>
            <button data-testId='decrease-button' onClick={()=> setCounter(counter-1)}>Decrease</button>
        </>
    )
}

export default NewComponent;