import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
export const UseEffect = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(`useEffect=>You Clicked ${count} times`);
        return ()=>{
            console.log('====================');
        }
    },[count])
    return (
        <>
            <p>你点击了 {count}次！</p>
            <button onClick={() => { setCount(count + 1) }}>点我</button>
            <Router>
                <ul>
                    <li><Link to='/' >首页</Link></li>
                    <li><Link to='/list/'>列表</Link></li>
                </ul>
                <Route path='/' exact component={Index} />
                <Route path='/list/' component={List} />
            </Router>
        </>
    )
}

const Index = () => {
    useEffect(() => {
        console.log('useEffect======>hi，这里是Index页面')
        return ()=>{
            console.log('Index:你要走了呀，')
        }
    },[])
    return (<h2>DaiWang.Index</h2>)
}
const List = () => {
    useEffect(() => {
        console.log('useEffect=====>hello，这里是List页面');
    })
    return (<h2>List-page</h2>)
}