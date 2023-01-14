import React, { useState } from 'react';
import {useErrorHandler} from 'react-error-boundary'
function Counter(){
    const handleError = useErrorHandler()
    const [count, setCount] = useState(0);
    const handleClick = () => {
        try{
            if(count < 4) setCount(count + 1);
            else throw new Error('count Exceeded')
        }catch(err){
            handleError(err)
        }      
    }
    return (
        <div>
            <h2>count: {count} </h2>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}
export default Counter;