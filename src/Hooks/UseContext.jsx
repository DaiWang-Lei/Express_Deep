import React, { useState, createContext, useContext } from 'react';
const CountConText = createContext()
export const UseContext = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => { setCount(count + 1) }}>点我</button>
            {/*  关键代码  */}
            <CountConText.Provider value={count}>
                <Counter />
            </CountConText.Provider>
        </div>
    )
}

const Counter = () => {
    const count = useContext(CountConText)
    return (
        <h2>{count}</h2>
    )
}
