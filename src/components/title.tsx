import { useState } from "react";

export const Title = () => {
    const [counter, setCounter] = useState(0);
    return <h1 onClick={() => setCounter((prev) => prev + 1)}>click me {counter}</h1>;
};
