import React, { useReducer } from 'react';

const initialState = {
    firstCounter: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { firstCounter: state.firstCounter + action.value };
        case 'DECREMENT':
            return { firstCounter: state.firstCounter - action.value };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>Count - {count.firstCounter}</div>
            <button
                onClick={() => {
                    dispatch({ type: 'INCREMENT', value: 1 });
                }}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: 'DECREMENT', value: 1 })}>
                Decrement
            </button>
            <button
                onClick={() => {
                    dispatch({ type: 'INCREMENT', value: 2 });
                }}>
                IncrementTwo
            </button>
            <button onClick={() => dispatch({ type: 'DECREMENT', value: 2 })}>
                DecrementTwo
            </button>
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        </div>
    );
}

export default CounterTwo;
