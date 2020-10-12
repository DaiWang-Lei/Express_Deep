import React, { useReducer } from 'react';
export const UseReducer = () => {
    const [count, dispatch] = useReducer((state, action) => {
        switch (action) {
            case 'add':
                return state + 1
            case 'sub':
                return state - 1
            default:
                return state
        }
    }, 0)
    return (
        <>
            <h2>现在的分数是：{count}</h2>
            <button onClick={() => { dispatch('add') }}>加法</button>
            <button onClick={() => { dispatch('sub') }}>减法</button>
        </>
    )
}