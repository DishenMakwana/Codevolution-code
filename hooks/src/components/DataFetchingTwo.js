import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
    loading: false,
    error: '',
    post: {},
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                post: action.payload,
            };
        case 'FETCH_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

function DataFetchingTwo() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts/1')
            .then((res) => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
            })
            .catch((err) => {
                dispatch({ type: 'FETCH_FAILURE', payload: err.message });
            });
    }, []);

    return (
        <div>
            {state.loading ? 'Loading...' : state.post.title}
            {state.error ? state.error : null}
        </div>
    );
}

export default DataFetchingTwo;
