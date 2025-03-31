import { useCallback, useState } from "react";

function Mycallback() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []);

    console.log("my call back");

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </>
    );
}

export default Mycallback;
