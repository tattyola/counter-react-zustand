import React from 'react';
import useCounterStore from "./useCounterStore";

const Counter = () => {
    const {increment, decrement, count} = useCounterStore();

    return (
        <div>
            <h1>
                Zustand Counter {count}
            </h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
};

export default Counter;
