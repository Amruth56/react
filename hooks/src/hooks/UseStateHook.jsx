import { useState } from 'react';

export function UseStateHook() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((count) => count + 1);
    };

    return (
        <>
            <p>Count is {count}</p>
            <button onClick={increment}>Increment</button>
        </>
    );
}
