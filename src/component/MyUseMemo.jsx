import { useState, useMemo } from "react";

function MyCalculation(num) {
    // console.log("Expensive Calculation Running...");
    return num * 8; // Example calculation
}

function MyUseMemo() {
    const [count, setCount] = useState(0);

    const calculation = useMemo(() => MyCalculation(count), [count]);

    return (
        <>
            <p>Count: {count}</p>
            <p>Calculated Value: {calculation}</p>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment Count</button>
        </>
    );
}

export default MyUseMemo;
