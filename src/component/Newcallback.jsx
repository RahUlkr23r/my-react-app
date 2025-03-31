import { useState, useCallback } from "react";

function NewCallback() {
    console.log("This is a new Callback component");
    
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(10); // Added num as a state

    const incrementCount = useCallback(() => {
        setCount(prevCount => prevCount + 1); // Using functional update pattern
    }, []);

    const increaseNum = useCallback(() => {
        setNum(prevNum => prevNum + 1);
    }, []);

    return (
        <div>
            <p>Count: {count}</p>
            <p>Number: {num}</p> {/* Fixed num display */}
            <button onClick={increaseNum}>Increase Number</button> {/* Fixed button syntax */}
            <button onClick={incrementCount}>Increment Count</button>
        </div>
    );
}

export default NewCallback;
